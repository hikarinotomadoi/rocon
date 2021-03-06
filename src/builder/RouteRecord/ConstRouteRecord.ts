import type { Location } from "../../core/Location";
import { AttachableRouteBuilder } from "../RouteBuilderLink";
import { ActionTypeOfRouteRecord, RouteRecordBase } from "./RouteRecordBase";
import type { RouteRecordType } from "./RouteRecordType";

/**
 * Object for fixed-location route record.
 */
export class ConstRouteRecord<ActionResult, Match, HasAction extends boolean>
  extends RouteRecordBase<ActionResult, Match, HasAction>
  implements RouteRecordType<ActionResult, Match, HasAction> {
  readonly location: Location;

  constructor(
    parent: AttachableRouteBuilder<ActionResult, unknown>,
    location: Location,
    action: ActionTypeOfRouteRecord<ActionResult, Match, HasAction>
  ) {
    super(parent.getBuilderLink(), action, () => this.location);
    this.location = location;
  }
}
