#!/usr/bin/env python3
"""
Karmic Genie — Proof-of-Dharma (PoD) & Soulbound Prestige Ledger Engine
=======================================================================
A reference blockchain implementation where social status, fame, and civic privileges
cannot be bought or hoarded—they can ONLY be earned by verified acts of Dharma (Dana & Seva)
and giving away surplus wealth to strengthen the community commons.
"""

import hashlib
import json
import math
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Dict, List, Optional


DHARMA_PILLARS = {
    "ANNADANA": {"name": "Annadana & Aarogya (Food & Healthcare)", "multiplier": 1.5},
    "VIDYADANA": {"name": "Vidyadana (Open Education & Knowledge)", "multiplier": 1.4},
    "BHUMI_SEVA": {"name": "Bhumi & Civic Infrastructure (Water, Solar, Trees, Roads)", "multiplier": 1.6},
    "RUNA_VIMOCHANA": {"name": "Runa-Vimochana (Debt Relief & 0% Mutual Credit Backing)", "multiplier": 1.8},
    "SATYA_NYAYA": {"name": "Satya & Nyaya (Citizen Jury & Honest Audit Seva)", "multiplier": 1.3},
}


def compute_dharma_tier(karma_score: float) -> str:
    if karma_score >= 50000:
        return "👑 Mahādānī / Rajarshi (Supreme Benefactor)"
    elif karma_score >= 15000:
        return "🏛️ Lok-Stambha (Pillar of the Town)"
    elif karma_score >= 3000:
        return "🔥 Dharma-Rakshak (Community Guardian)"
    elif karma_score >= 500:
        return "🌱 Sevak (Active Contributor)"
    else:
        return "⚠️ Sanchaya-Baddha (Hoarder / Unawakened)"


@dataclass
class CitizenAccount:
    account_id: str
    name: str
    role: str
    sovereign_balance: float
    mutual_credit: float = 0.0
    soulbound_karma: float = 0.0
    total_given_away: float = 0.0
    seva_hours_verified: float = 0.0

    @property
    def dharma_tier(self) -> str:
        return compute_dharma_tier(self.soulbound_karma)

    @property
    def generosity_ratio(self) -> float:
        total_wealth_handled = self.sovereign_balance + self.total_given_away
        if total_wealth_handled <= 0:
            return 0.0
        return round((self.total_given_away / total_wealth_handled) * 100.0, 2)


@dataclass
class DharmaBlock:
    index: int
    timestamp: str
    tx_type: str
    actor_id: str
    beneficiary: str
    pillar: str
    material_amount: float
    karma_minted: float
    proof_signatures: List[str]
    prev_hash: str
    block_hash: str = ""

    def compute_hash(self) -> str:
        payload = json.dumps(
            {
                "index": self.index,
                "timestamp": self.timestamp,
                "tx_type": self.tx_type,
                "actor_id": self.actor_id,
                "beneficiary": self.beneficiary,
                "pillar": self.pillar,
                "material_amount": round(self.material_amount, 2),
                "karma_minted": round(self.karma_minted, 2),
                "proof_signatures": sorted(self.proof_signatures),
                "prev_hash": self.prev_hash,
            },
            sort_keys=True,
        )
        return hashlib.sha256(payload.encode("utf-8")).hexdigest()


class KarmicGenieLedger:
    """
    Core Proof-of-Dharma Ledger:
    1. Rewards sacrificial giving (higher % of net worth given = higher Karma multiplier).
    2. Penalizes idle hoarding above the Community Abundance Threshold via Demurrage.
    3. Requires 3-of-3 Proof-of-Dharma signatures (Beneficiary + Citizen Jury + Geo/Audit Proof).
    """

    ABUNDANCE_HOARD_THRESHOLD = 1_000_000.0  # Threshold above which idle hoarding decays

    def __init__(self, jurisdiction_name: str = "Model Dharma Town #01"):
        self.jurisdiction_name = jurisdiction_name
        self.commons_pool: float = 0.0
        self.accounts: Dict[str, CitizenAccount] = {}
        self.chain: List[DharmaBlock] = []
        self._create_genesis_block()

    def _create_genesis_block(self) -> None:
        genesis = DharmaBlock(
            index=0,
            timestamp=datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
            tx_type="GENESIS_DHARMA_CHARTER",
            actor_id="SYSTEM",
            beneficiary=self.jurisdiction_name,
            pillar="SATYA_NYAYA",
            material_amount=0.0,
            karma_minted=0.0,
            proof_signatures=["CONSTITUTIONAL_GENESIS", "CITIZEN_ASSEMBLY", "PUBLIC_AUDITOR"],
            prev_hash="0" * 64,
        )
        genesis.block_hash = genesis.compute_hash()
        self.chain.append(genesis)

    def register_account(self, account_id: str, name: str, role: str, initial_balance: float) -> CitizenAccount:
        acc = CitizenAccount(
            account_id=account_id,
            name=name,
            role=role,
            sovereign_balance=initial_balance,
        )
        self.accounts[account_id] = acc
        return acc

    def calculate_sacrificial_karma(
        self, actor: CitizenAccount, amount_given: float, pillar_key: str, seva_hours: float = 0.0
    ) -> float:
        """
        Karmic Genie Formula:
        - Base Karma from amount given + verified Seva hours.
        - Sacrificial Multiplier: Giving 25% of your wealth yields a much higher multiplier
          than a billionaire giving 0.01% of their hoard. This forces wealthy individuals
          to give away substantial portions of their fortune to reach top prestige tiers.
        """
        pillar_mult = DHARMA_PILLARS.get(pillar_key, {"multiplier": 1.0})["multiplier"]
        pre_gift_wealth = max(actor.sovereign_balance, 1.0)
        sacrifice_fraction = min(amount_given / pre_gift_wealth, 1.0)

        # Sacrificial boost ranges from 1.0x (tiny % of wealth) up to 4.0x (giving away majority of wealth)
        sacrificial_boost = 1.0 + (3.0 * math.sqrt(sacrifice_fraction))

        dana_karma = (amount_given / 100.0) * pillar_mult * sacrificial_boost
        seva_karma = (seva_hours * 50.0) * pillar_mult
        return round(dana_karma + seva_karma, 2)

    def perform_dharma(
        self,
        actor_id: str,
        beneficiary_description: str,
        pillar_key: str,
        amount_given: float,
        seva_hours: float = 0.0,
        proof_signatures: Optional[List[str]] = None,
    ) -> DharmaBlock:
        if actor_id not in self.accounts:
            raise ValueError(f"Unknown account: {actor_id}")

        actor = self.accounts[actor_id]
        if amount_given > actor.sovereign_balance:
            raise ValueError(f"{actor.name} has insufficient balance for this Dana.")

        sigs = proof_signatures or ["BENEFICIARY_RECEIPT_SIG", "CITIZEN_JURY_VERIFIED", "GEO_HASH_PROOF"]
        if len(sigs) < 3:
            raise ValueError("Proof-of-Dharma requires at least 3 independent verification signatures.")

        karma_earned = self.calculate_sacrificial_karma(actor, amount_given, pillar_key, seva_hours)

        # Update balances: wealth leaves personal hoard and enters the Commons / Beneficiary
        actor.sovereign_balance -= amount_given
        actor.total_given_away += amount_given
        actor.seva_hours_verified += seva_hours
        actor.soulbound_karma += karma_earned
        self.commons_pool += amount_given

        prev_hash = self.chain[-1].block_hash
        block = DharmaBlock(
            index=len(self.chain),
            timestamp=datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
            tx_type="PROOF_OF_DHARMA",
            actor_id=actor_id,
            beneficiary=beneficiary_description,
            pillar=pillar_key,
            material_amount=amount_given,
            karma_minted=karma_earned,
            proof_signatures=sigs,
            prev_hash=prev_hash,
        )
        block.block_hash = block.compute_hash()
        self.chain.append(block)
        return block

    def run_anti_hoarding_epoch(self, demurrage_rate: float = 0.02) -> List[DharmaBlock]:
        """
        Forces hoarders to either voluntarily give & build prestige, or face automatic
        Hoarding Demurrage + Karmic Aura decay when sitting on idle mega-wealth.
        """
        epoch_blocks: List[DharmaBlock] = []
        for acc in self.accounts.values():
            if acc.sovereign_balance > self.ABUNDANCE_HOARD_THRESHOLD and acc.generosity_ratio < 5.0:
                excess = acc.sovereign_balance - self.ABUNDANCE_HOARD_THRESHOLD
                recycled = round(excess * demurrage_rate, 2)
                karma_penalty = -round(recycled / 50.0, 2)

                acc.sovereign_balance -= recycled
                acc.soulbound_karma = max(0.0, acc.soulbound_karma + karma_penalty)
                self.commons_pool += recycled

                block = DharmaBlock(
                    index=len(self.chain),
                    timestamp=datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC"),
                    tx_type="HOARDING_DEMURRAGE_DECAY",
                    actor_id=acc.account_id,
                    beneficiary="TOWN_DHARMA_COMMONS_POOL",
                    pillar="RUNA_VIMOCHANA",
                    material_amount=recycled,
                    karma_minted=karma_penalty,
                    proof_signatures=["PROTOCOL_EPOCH_CLOCK", "PUBLIC_AUDITOR", "COMMONS_ESCROW"],
                    prev_hash=self.chain[-1].block_hash,
                )
                block.block_hash = block.compute_hash()
                self.chain.append(block)
                epoch_blocks.append(block)
        return epoch_blocks

    def verify_chain_integrity(self) -> bool:
        for i in range(1, len(self.chain)):
            curr = self.chain[i]
            prev = self.chain[i - 1]
            if curr.prev_hash != prev.block_hash:
                return False
            if curr.compute_hash() != curr.block_hash:
                return False
        return True

    def print_leaderboard(self) -> None:
        print("\n" + "=" * 92)
        print(f"🧞‍♂️ KARMIC GENIE — PUBLIC DHARMA LEADERBOARD ({self.jurisdiction_name})")
        print("   Status & Fame are ranked strictly by Verified Soulbound Karma (NEVER by hoarded cash!)")
        print("=" * 92)
        ranked = sorted(self.accounts.values(), key=lambda a: a.soulbound_karma, reverse=True)
        print(f"{'Rank':<5} {'Citizen / Entity':<28} {'Soulbound Karma':<16} {'Given Away (% Wealth)':<23} {'Hoarded Cash':<15}")
        print("-" * 92)
        for idx, acc in enumerate(ranked, start=1):
            given_str = f"₹{acc.total_given_away:,.0f} ({acc.generosity_ratio}%)"
            print(
                f"#{idx:<4} {acc.name[:26]:<28} {acc.soulbound_karma:<16,.1f} {given_str:<23} ₹{acc.sovereign_balance:,.0f}"
            )
            print(f"      ↳ Honour Title: {acc.dharma_tier} | Verified Seva: {acc.seva_hours_verified:.0f} hrs")
        print("-" * 92)
        print(f"🏛️ Town Dharma Commons Pool: ₹{self.commons_pool:,.2f} | Chain Integrity: {'VALID ✓' if self.verify_chain_integrity() else 'TAMPERED ✗'}")
        print("=" * 92 + "\n")


if __name__ == "__main__":
    ledger = KarmicGenieLedger("Model Dharma City #01")

    # Register 4 archetypes:
    # 1. A modest teacher who gives generously & teaches for free
    ledger.register_account("CIT-01", "Meera Devi (School Teacher)", "Educator", initial_balance=120_000)
    # 2. A local artisan/farmer cooperative leader
    ledger.register_account("CIT-02", "Kisan & Artisan Guild", "Local Producer", initial_balance=450_000)
    # 3. A wealthy industrialist who converts his hoard into public hospitals & debt relief for fame
    ledger.register_account("CIT-03", "Vikramaditya Builders", "Industrialist", initial_balance=5_000_000)
    # 4. A billionaire hoarder who tries to sit on ₹1 Crore without giving anything
    ledger.register_account("CIT-04", "Dhanapati Hoardings Ltd", "Idle Hoarder", initial_balance=10_000_000)

    # Execute verified acts of Dharma
    ledger.perform_dharma(
        actor_id="CIT-01",
        beneficiary_description="Free Evening Coding & Math Gurukula for 80 Village Children",
        pillar_key="VIDYADANA",
        amount_given=40_000,
        seva_hours=120,
    )

    ledger.perform_dharma(
        actor_id="CIT-02",
        beneficiary_description="Community Kitchen (Annadana) + Seed Bank for Small Farmers",
        pillar_key="ANNADANA",
        amount_given=180_000,
        seva_hours=60,
    )

    ledger.perform_dharma(
        actor_id="CIT-03",
        beneficiary_description="Built Town Clean Water Plant & Forgave ₹20L Farmer Loans",
        pillar_key="RUNA_VIMOCHANA",
        amount_given=3_200_000,
        seva_hours=20,
    )

    # Run Anti-Hoarding Epoch: Dhanapati Hoardings refused to give, so Demurrage recycles idle hoard
    ledger.run_anti_hoarding_epoch(demurrage_rate=0.05)

    # Display final Dharma Leaderboard
    ledger.print_leaderboard()
