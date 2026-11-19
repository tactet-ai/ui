import type { ValidateDraftResponseModel } from "@/orval/tactet.schemas";

export function runStartedConversation(resp: ValidateDraftResponseModel): boolean {
    return !!resp.convid;
}
