/**
 * GOVERNANCE — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by GOVERNANCE.
 *
 * Ownership boundary:
 *
 *   GOVERNANCE
 *    │
 *    ├── GOVERNANCE-AUTHORITY
 *    ├── GOVERNANCE-BOUNDARIES
 *    ├── GOVERNANCE-CONTINUITY
 *    └── GOVERNANCE-EVIDENCE
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform governance definitions
 * - enrich evidence
 * - create relationships
 * - transfer ownership
 *
 * It only declares the GOVERNANCE access-surface structure.
 */

export default {
  governance: {
    authority: "GOVERNANCE-AUTHORITY",
    boundaries: "GOVERNANCE-BOUNDARIES",
    continuity: "GOVERNANCE-CONTINUITY",
    evidence: "GOVERNANCE-EVIDENCE",
  },
};
