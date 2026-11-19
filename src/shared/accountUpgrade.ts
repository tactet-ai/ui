import { ServiceLevel } from "@/orval/tactet.schemas";

export type UpgradeOffer = { kind: "none" } | { kind: "startPaid" };

export function upgradeOffer(level: string): UpgradeOffer {
    return level === ServiceLevel.free ? { kind: "startPaid" } : { kind: "none" };
}
