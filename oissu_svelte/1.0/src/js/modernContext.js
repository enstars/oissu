/*-ModernContext(Modified)-*/
"use strict";
export class Context {
    constructor(target_selector, contents = []) {
        const style = document.createElement("style");
        style.textContent = `
        `;
        document.body.appendChild(style);
        this.context = document.createElement("div");
        this.context.className = "modern_context_js_outer";
        document.body.appendChild(this.context);
        this.add_contents(contents);
        document.querySelectorAll(target_selector).forEach((target) => {
            target.addEventListener("contextmenu", (event) => {
                this.open(event);
                event.preventDefault();
            });
        });
        document.addEventListener("click", (event) => {
            if (event.target !== this.context)
                this.close();
        }, false);
        document.addEventListener("keydown", this._watch_keydown.bind(this), false);
        this.is_visible = false;
    }
    add_item(label, callback = () => { }) {
        const item = document.createElement("div");
        item.className = "context_item";
        item.addEventListener("click", () => {
            callback();
        });
        item.addEventListener("mouseover", () => {
            this._hover(item);
        });
        item.addEventListener("mouseleave", () => {
            this._reset_all_hover_status();
        });
        const inner = document.createElement("div");
        inner.className = "context_item_inner";
        inner.innerHTML = label;
        item.appendChild(inner);
        this.context.appendChild(item);
    }
    add_separator() {
        this.context.appendChild(document.createElement("hr"));
    }
    add_contents(contents) {
        for (let i = 0; i < contents.length; i++) {
            const content = contents[i];
            const types = ["item", "separator"];
            if (types.includes(content.type) === false)
                continue;
            switch (content.type) {
                case "item":
                    const item = {
                        ...{
                            label: "",
                            callback: () => { }
                        },
                        ...content
                    };
                    if (item.callback)
                        this.add_item(item.label, item.callback);
                    else
                        this.add_item(item.label);
                    break;
                case "separator":
                    this.add_separator();
                    break;
            }
        }
    }
    open(event) {
        const context_show_transition_ms = 300;
        this.context.style.transition = "none";
        if (event.screenY < window.innerHeight / 2) {
            this.context.style.bottom = "auto";
            this.context.style.top = `${event.pageY}px`;
        }
        else {
            this.context.style.top = "auto";
            this.context.style.bottom = `${window.innerHeight - event.pageY}px`;
        }
        if (event.screenX < window.innerWidth / 2) {
            this.context.style.right = "auto";
            this.context.style.left = `${event.pageX}px`;
        }
        else {
            this.context.style.left = "auto";
            this.context.style.right = `${window.innerWidth - event.pageX}px`;
        }
        this.context.style.display = "block";
        const context_height = window.getComputedStyle(this.context).getPropertyValue("height");
        this.context.style.height = "0";
        this.context.style.transition = `${context_show_transition_ms}ms`;
        setTimeout(() => {
            this.context.style.height = `${context_height}`;
            setTimeout(() => {
                this.context.style.height = "auto";
            }, context_show_transition_ms);
        }, 1);
        this.is_visible = true;
    }
    close() {
        this.context.style.display = "none";
        this._reset_all_hover_status();
        this.is_visible = false;
    }
    _watch_keydown(key_event) {
        if (this.is_visible === false)
            return;
        const current_selected_item = this.context.querySelector(".context_item.hover") || this.context.querySelector(".context_item");
        const number_of_items = this.context.querySelectorAll(".context_item").length;
        const hovered_item_index = this._hovered_item_index();
        switch (key_event.key) {
            case "Escape":
                const div = document.createElement("div");
                div.style.display = "none";
                document.body.appendChild(div);
                div.click();
                div.remove();
                break;
            case "ArrowDown":
                if (hovered_item_index === null)
                    this._hover(0);
                else
                    this._hover(hovered_item_index + 1 < number_of_items ? hovered_item_index + 1 : 0);
                break;
            case "ArrowUp":
                if (hovered_item_index === null)
                    this._hover(number_of_items - 1);
                else
                    this._hover(hovered_item_index - 1 >= 0 ? hovered_item_index - 1 : number_of_items - 1);
                break;
            case "Enter":
                current_selected_item.click();
                break;
        }
        key_event.preventDefault();
    }
    _reset_all_hover_status() {
        this.context.querySelectorAll(".context_item.hover").forEach((element) => {
            element.classList.remove("hover");
        });
    }
    _hover(item) {
        this._reset_all_hover_status();
        if (typeof (item) == "number") {
            this.context.querySelectorAll(".context_item").item(item).classList.add("hover");
        }
        else if (typeof (item) === "object") {
            item.classList.add("hover");
        }
    }
    _hovered_item_index() {
        const hovered_item = this.context.querySelector(".context_item.hover");
        const context_items = this.context.querySelectorAll(".context_item");
        if (!hovered_item) {
            return null;
        }
        for (let i = 0; i < context_items.length; i++) {
            if (hovered_item === context_items[i])
                return i;
        }
        return null;
    }
}
