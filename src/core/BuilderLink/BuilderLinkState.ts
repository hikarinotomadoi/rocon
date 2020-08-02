import type { BuilderLink } from ".";

/**
 * State of BuilderLink.
 * - unattached: this link is not attached to a parent.
 * - attached: this link is attached to a parent.
 * - inherited: another link inherited this one.
 */
export type BuilderLinkState<ActionResult, Segment, Value> =
  | {
      state: "unattached";
      parentLink?: undefined;
    }
  | {
      state: "attached";
      parentLink: BuilderLink<ActionResult, Segment, Value>;
      segmentGetter: (match: unknown) => Segment;
    }
  | {
      state: "inherited";
      parentLink?: undefined;
      inheritor: BuilderLink<ActionResult, Segment, Value>;
    };