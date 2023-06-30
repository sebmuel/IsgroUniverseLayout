import Konva from "konva";
import { Stage } from "konva/lib/Stage";
import { PropertyValueMap } from "lit";
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("sp-universe")
export class Universe extends LitElement {
  @property({ type: String })
  bg?: string;
  stage?: Stage;

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    debugger;
    const container = this.renderRoot.querySelector("#container") as HTMLDivElement;
    this.stage = new Konva.Stage({
      container: container,
      width: this.offsetWidth,
      height: this.offsetHeight,
    });
  }

  render() {
    return html`<div id="container" style="background: gray"></div>`;
  }

  static styles = css`
    #container {
      height: 100%;
      background-repeat: no-repeat;
    }
  `;
}
