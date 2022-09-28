import { getCache } from '../cache/repository';
import type { BranchCache } from '../cache/repository/types';
import { getBranchCommit } from '.';

/**
 * Called when a new commit is added to branch
 *
 * ie. when branch is created/updated
 */
export function setBranchCommit(
  branchName: string,
  baseBranch: string,
  commitSha: string
): void {
  const cache = getCache();
  cache.branches ??= [];
  let branch = cache.branches.find((br) => br.branchName === branchName);
  if (!branch) {
    branch = {
      branchName,
      baseBranch,
    } as BranchCache;
    cache.branches.push(branch);
  }

  const baseBranchSha = getBranchCommit(baseBranch);

  branch.sha = commitSha;
  branch.baseBranchSha = baseBranchSha;
  branch.isBehindBase = false;
  branch.isModified = false;
  branch.parentSha = baseBranchSha;
}
