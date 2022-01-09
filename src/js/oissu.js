import $ from "jquery";
import tippy, { createSingleton } from "tippy.js";
import "tippy.js/dist/tippy.css";
import { Context } from "./modernContext.js";
import "../scss/oissu.scss";
const feather = require("feather-icons");
const yaml = require("js-yaml");
const interact = require("interactjs");

(function (oissu, $, undefined) {
    oissu.logo = `<svg class="oissu-logo" width="1093" height="421" viewBox="0 0 1093 421" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class="oissu-logo__bubble" fill-rule="evenodd" clip-rule="evenodd" d="M9.75124 191.341C9.75124 85.7277 95.3678 0.111267 200.981 0.111267H901.019C1006.63 0.111267 1092.25 85.7277 1092.25 191.341C1092.25 296.954 1006.63 382.571 901.019 382.571H200.981C190.336 382.571 179.895 381.701 169.724 380.029C155.811 390.612 138.097 401.238 117.302 410.124C82.9101 424.821 44.8501 421.969 16.1172 413.366C8.23887 411.007 0.0539638 406.444 0.882103 400.082C1.84272 392.702 7.69815 390.663 14.3841 388.335C14.9566 388.136 15.5351 387.934 16.1172 387.727C30.5423 382.594 41.3119 374.935 55.4507 358.487C62.1263 350.721 67.7048 342.001 72.307 332.806C33.8746 297.828 9.75124 247.402 9.75124 191.341ZM818.93 146.696H785.105V195.53C785.105 202.788 783.978 208.461 781.723 212.548C779.468 216.635 776.649 219.524 773.267 221.215C769.814 222.907 766.361 223.752 762.908 223.752C759.103 223.752 756.002 222.59 753.606 220.264C751.14 218.009 749.907 214.486 749.907 209.694V146.696H716.082V213.605C716.082 223.752 717.985 231.715 721.79 237.493C725.525 243.272 730.458 247.359 736.588 249.755C742.719 252.151 749.272 253.349 756.249 253.349C763.155 253.349 769.356 251.411 774.852 247.535C778.896 244.647 782.314 240.466 785.105 234.994V251.446H818.93V146.696ZM651.938 254.829C642.002 254.829 633.229 253.49 625.619 250.812C618.008 248.205 612.089 244.223 607.861 238.868C603.562 233.583 601.448 226.888 601.519 218.784H632.066C632.207 222.449 633.652 224.986 636.4 226.395C639.078 227.804 642.742 228.509 647.393 228.509C650.212 228.509 652.537 228.157 654.369 227.452C656.202 226.747 657.576 225.796 658.492 224.598C659.408 223.47 659.866 222.237 659.866 220.898C659.866 219.137 659.232 217.727 657.963 216.67C656.695 215.613 654.722 214.556 652.044 213.499L626.781 203.669C619.312 200.568 613.569 196.622 609.552 191.831C605.465 187.109 603.421 181.472 603.421 174.918C603.421 165.687 607.685 158.217 616.211 152.51C624.738 146.802 636.4 143.948 651.198 143.948C665.081 143.948 675.756 147.189 683.226 153.672C690.695 160.155 694.466 168.4 694.536 178.406H663.565C663.565 176.151 662.614 174.178 660.712 172.487C658.809 170.866 655.638 170.056 651.198 170.056C647.534 170.056 644.645 170.655 642.531 171.853C640.417 173.051 639.36 174.636 639.36 176.61C639.36 179.287 641.58 181.401 646.019 182.952L674.77 194.473C681.887 197.292 687.489 200.815 691.576 205.043C695.663 209.271 697.707 214.556 697.707 220.898C697.707 226.677 695.734 232.138 691.788 237.282C687.771 242.497 682.31 246.725 675.404 249.966C668.498 253.208 660.676 254.829 651.938 254.829ZM540.001 254.829C530.065 254.829 521.291 253.49 513.681 250.812C506.07 248.205 500.151 244.223 495.923 238.868C491.625 233.583 489.51 226.888 489.581 218.784H520.129C520.27 222.449 521.714 224.986 524.462 226.395C527.14 227.804 530.805 228.509 535.455 228.509C538.274 228.509 540.6 228.157 542.432 227.452C544.264 226.747 545.638 225.796 546.554 224.598C547.47 223.47 547.928 222.237 547.928 220.898C547.928 219.137 547.294 217.727 546.026 216.67C544.757 215.613 542.784 214.556 540.106 213.499L514.844 203.669C507.374 200.568 501.631 196.622 497.614 191.831C493.527 187.109 491.484 181.472 491.484 174.918C491.484 165.687 495.747 158.217 504.273 152.51C512.8 146.802 524.462 143.948 539.261 143.948C553.143 143.948 563.819 147.189 571.288 153.672C578.758 160.155 582.528 168.4 582.598 178.406H551.628C551.628 176.151 550.676 174.178 548.774 172.487C546.871 170.866 543.7 170.056 539.261 170.056C535.596 170.056 532.707 170.655 530.593 171.853C528.479 173.051 527.422 174.636 527.422 176.61C527.422 179.287 529.642 181.401 534.081 182.952L562.832 194.473C569.949 197.292 575.551 200.815 579.639 205.043C583.726 209.271 585.769 214.556 585.769 220.898C585.769 226.677 583.796 232.138 579.85 237.282C575.833 242.497 570.372 246.725 563.466 249.966C556.56 253.208 548.739 254.829 540.001 254.829ZM349.387 202.929L376.683 212.548C378.375 207.897 380.383 204.515 382.708 202.401C384.963 200.287 387.641 199.23 390.742 199.23C392.641 199.23 393.562 199.529 395.405 200.129C395.614 200.197 395.835 200.269 396.07 200.345C396.224 200.394 396.384 200.445 396.551 200.498C399.229 201.414 402.858 202.577 407.438 203.986C412.512 206.171 416.881 207.686 420.545 208.531C424.139 209.447 427.204 209.905 429.741 209.905C437.704 209.905 449.379 207.192 455.228 201.766C461.077 196.34 467.176 188.483 470.348 178.195L444.43 166.885C442.879 170.479 440.977 173.227 438.722 175.13C436.396 177.103 433.789 178.089 430.9 178.089C429.089 178.089 428.104 177.775 426.135 177.145C425.728 177.015 425.28 176.872 424.773 176.715C421.743 175.799 418.044 174.495 413.675 172.804C408.742 170.902 404.338 169.422 400.462 168.365C396.516 167.378 392.711 166.885 389.046 166.885C380.238 166.885 367.043 170.197 362.181 176.821C357.319 183.515 351.994 192.218 349.387 202.929ZM308.083 133.906C301.671 133.906 296.738 132.25 293.285 128.938C289.762 125.697 288 121.081 288 115.091C288 109.242 289.762 104.556 293.285 101.033C296.738 97.58 301.671 95.8536 308.083 95.8536C314.284 95.8536 319.182 97.58 322.776 101.033C326.369 104.556 328.166 109.242 328.166 115.091C328.166 121.081 326.369 125.697 322.776 128.938C319.182 132.25 314.284 133.906 308.083 133.906ZM291.171 251.446V146.696H324.995V251.446H291.171ZM219.429 254.828C209.775 254.828 200.931 252.82 192.898 248.803C184.794 244.857 178.347 238.797 173.555 230.623C168.693 222.519 166.261 212.196 166.261 199.652C166.261 186.686 168.693 176.116 173.555 167.942C178.347 159.768 184.794 153.707 192.898 149.761C200.931 145.886 209.775 143.948 219.429 143.948C228.872 143.948 237.575 145.886 245.537 149.761C253.5 153.707 259.913 159.768 264.775 167.942C269.567 176.116 271.963 186.686 271.963 199.652C271.963 212.196 269.567 222.519 264.775 230.623C259.913 238.797 253.5 244.857 245.537 248.803C237.575 252.82 228.872 254.828 219.429 254.828ZM227.674 222.801C224.573 224.492 221.402 225.338 218.161 225.338C213.298 225.338 209.07 223.4 205.477 219.524C201.812 215.648 199.98 209.025 199.98 199.652C199.98 193.169 201.037 187.99 203.151 184.114C205.195 180.309 207.837 177.561 211.079 175.87C214.25 174.178 217.456 173.333 220.698 173.333C225.56 173.333 229.717 175.306 233.17 179.252C236.623 183.198 238.35 189.998 238.35 199.652C238.35 205.853 237.328 210.821 235.284 214.556C233.241 218.361 230.704 221.11 227.674 222.801ZM898.454 111.654V193.82C893.608 191.027 884.917 188.558 878.944 189.094C856.919 191.071 849.315 206.532 849.315 224.685C849.315 242.838 863.776 254.829 878.944 254.829C901.659 254.829 916.304 240.822 914.882 211.301V144.51L947.738 166.971V134.114L914.882 111.654H898.454Z" fill="black"/>
    <path class="oissu-logo__letter" fill-rule="evenodd" clip-rule="evenodd" d="M192.898 248.803C200.931 252.82 209.775 254.828 219.429 254.828C228.872 254.828 237.575 252.82 245.537 248.803C253.5 244.857 259.913 238.797 264.775 230.623C269.567 222.519 271.963 212.196 271.963 199.652C271.963 186.686 269.567 176.116 264.775 167.942C259.913 159.768 253.5 153.707 245.537 149.761C237.575 145.886 228.872 143.948 219.429 143.948C209.775 143.948 200.931 145.886 192.898 149.761C184.794 153.707 178.347 159.768 173.555 167.942C168.692 176.116 166.261 186.686 166.261 199.652C166.261 212.196 168.692 222.519 173.555 230.623C178.347 238.797 184.794 244.857 192.898 248.803ZM227.674 222.801C224.573 224.492 221.402 225.338 218.161 225.338C213.298 225.338 209.07 223.4 205.477 219.524C201.812 215.648 199.98 209.025 199.98 199.652C199.98 193.169 201.037 187.99 203.151 184.114C205.195 180.309 207.837 177.561 211.079 175.87C214.25 174.178 217.456 173.333 220.698 173.333C225.56 173.333 229.717 175.306 233.17 179.252C236.623 183.198 238.35 189.998 238.35 199.652C238.35 205.853 237.328 210.821 235.284 214.556C233.241 218.362 230.704 221.11 227.674 222.801Z" fill="white"/>
    <path class="oissu-logo__letter" d="M291.171 146.696V251.446H324.995V146.696H291.171Z" fill="white"/>
    <path class="oissu-logo__letter" d="M376.683 212.548L349.387 202.929C351.994 192.218 357.319 183.515 362.181 176.821C367.043 170.197 380.238 166.885 389.046 166.885C392.71 166.885 396.516 167.378 400.462 168.365C404.338 169.422 408.742 170.902 413.675 172.804C418.044 174.495 421.743 175.799 424.773 176.715C425.28 176.872 425.728 177.015 426.135 177.145C428.104 177.775 429.089 178.089 430.9 178.089C433.789 178.089 436.396 177.103 438.722 175.13C440.977 173.227 442.879 170.479 444.43 166.885L470.347 178.195C467.176 188.483 461.077 196.34 455.228 201.766C449.379 207.192 437.704 209.905 429.741 209.905C427.204 209.905 424.139 209.447 420.545 208.531C416.881 207.686 412.512 206.171 407.438 203.986C402.858 202.577 399.229 201.414 396.551 200.498C396.384 200.445 396.224 200.394 396.07 200.345C395.835 200.269 395.614 200.197 395.405 200.129C393.562 199.529 392.641 199.23 390.742 199.23C387.641 199.23 384.963 200.287 382.708 202.401C380.383 204.515 378.375 207.897 376.683 212.548Z" fill="white"/>
    <path class="oissu-logo__letter" d="M293.285 128.938C296.738 132.25 301.671 133.906 308.083 133.906C314.284 133.906 319.182 132.25 322.776 128.938C326.369 125.697 328.166 121.081 328.166 115.091C328.166 109.242 326.369 104.556 322.776 101.033C319.182 97.58 314.284 95.8536 308.083 95.8536C301.671 95.8536 296.738 97.58 293.285 101.033C289.762 104.556 288 109.242 288 115.091C288 121.081 289.762 125.697 293.285 128.938Z" fill="white"/>
    <path class="oissu-logo__letter" d="M513.681 250.812C521.291 253.49 530.065 254.829 540.001 254.829C548.739 254.829 556.56 253.208 563.466 249.966C570.372 246.725 575.833 242.497 579.85 237.282C583.796 232.138 585.769 226.677 585.769 220.898C585.769 214.556 583.726 209.271 579.639 205.043C575.551 200.815 569.949 197.292 562.832 194.473L534.081 182.952C529.642 181.401 527.422 179.287 527.422 176.61C527.422 174.636 528.479 173.051 530.593 171.853C532.707 170.655 535.596 170.056 539.261 170.056C543.7 170.056 546.871 170.866 548.774 172.487C550.676 174.178 551.628 176.152 551.628 178.406H582.598C582.528 168.4 578.758 160.155 571.288 153.672C563.819 147.189 553.143 143.948 539.261 143.948C524.462 143.948 512.8 146.802 504.273 152.51C495.747 158.217 491.484 165.687 491.484 174.918C491.484 181.472 493.527 187.109 497.614 191.831C501.631 196.622 507.374 200.569 514.844 203.669L540.106 213.499C542.784 214.556 544.757 215.613 546.026 216.67C547.294 217.727 547.928 219.137 547.928 220.898C547.928 222.237 547.47 223.471 546.554 224.598C545.638 225.796 544.264 226.747 542.432 227.452C540.6 228.157 538.274 228.509 535.455 228.509C530.805 228.509 527.14 227.804 524.462 226.395C521.714 224.986 520.27 222.449 520.129 218.784H489.581C489.51 226.888 491.625 233.583 495.923 238.868C500.151 244.223 506.07 248.205 513.681 250.812Z" fill="white"/>
    <path class="oissu-logo__letter" d="M625.619 250.812C633.229 253.49 642.002 254.829 651.938 254.829C660.676 254.829 668.498 253.208 675.404 249.966C682.31 246.725 687.771 242.497 691.788 237.282C695.734 232.138 697.707 226.677 697.707 220.898C697.707 214.556 695.663 209.271 691.576 205.043C687.489 200.815 681.887 197.292 674.77 194.473L646.019 182.952C641.58 181.401 639.36 179.287 639.36 176.61C639.36 174.636 640.417 173.051 642.531 171.853C644.645 170.655 647.534 170.056 651.198 170.056C655.638 170.056 658.809 170.866 660.712 172.487C662.614 174.178 663.565 176.152 663.565 178.406H694.536C694.466 168.4 690.695 160.155 683.226 153.672C675.756 147.189 665.081 143.948 651.198 143.948C636.4 143.948 624.738 146.802 616.211 152.51C607.685 158.218 603.421 165.687 603.421 174.918C603.421 181.472 605.465 187.109 609.552 191.831C613.569 196.622 619.312 200.569 626.781 203.669L652.044 213.499C654.722 214.556 656.695 215.613 657.963 216.67C659.232 217.727 659.866 219.137 659.866 220.898C659.866 222.237 659.408 223.471 658.492 224.598C657.576 225.796 656.202 226.747 654.369 227.452C652.537 228.157 650.212 228.509 647.393 228.509C642.742 228.509 639.078 227.804 636.4 226.395C633.652 224.986 632.207 222.449 632.066 218.784H601.519C601.448 226.888 603.562 233.583 607.861 238.868C612.089 244.223 618.008 248.205 625.619 250.812Z" fill="white"/>
    <path class="oissu-logo__letter" d="M785.105 146.696H818.93V251.446H785.105V234.995C782.314 240.466 778.896 244.647 774.852 247.535C769.356 251.411 763.155 253.349 756.249 253.349C749.272 253.349 742.719 252.151 736.588 249.755C730.458 247.359 725.525 243.272 721.79 237.493C717.985 231.715 716.082 223.752 716.082 213.605V146.696H749.907V209.694C749.907 214.486 751.14 218.009 753.606 220.264C756.002 222.59 759.103 223.752 762.908 223.752C766.361 223.752 769.814 222.907 773.267 221.216C776.649 219.524 779.468 216.635 781.723 212.548C783.978 208.461 785.105 202.788 785.105 195.53V146.696Z" fill="white"/>
    <path class="oissu-logo__letter" d="M898.454 193.82V111.654H914.882L947.738 134.114V166.971L914.882 144.51V211.301C916.304 240.823 901.659 254.829 878.944 254.829C863.776 254.829 849.315 242.838 849.315 224.685C849.315 206.532 856.919 191.071 878.944 189.094C884.917 188.558 893.608 191.027 898.454 193.82Z" fill="white"/>
    </svg>
    `;

    oissu.loader = `<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>`;

    const analyticsIframe = `<iframe src="http://uchuu.yuukun.dev/oissu/analytics.html" style="display: none;"></iframe>`;

    const URLParams = new URLSearchParams(window.location.search);

    oissu.debug = URLParams.get("debug");

    oissu.disabled = URLParams.get("disableOissu");

    oissu.cookie = {
        bubble: false,
        image: false,
        custom: false,
        fullscreenWidth: 600,
    };

    oissu.config = {};

    oissu.instances = [];

    oissu.bubbleToggle = function () {
        $("body").toggleClass("oissu-bubble");
        oissu.cookie["bubble"] = !oissu.cookie["bubble"];
        updateConfig();
    };

    oissu.imageToggle = function () {
        $("body").toggleClass("oissu-image");
        oissu.cookie["image"] = !oissu.cookie["image"];
        updateConfig();
    };

    oissu.chatToggle = function () {
        if ($("body").hasClass("oissu-custom")) {
            $("body").removeClass("oissu-image");
            $("body").removeClass("oissu-bubble");
            $("body").removeClass("oissu-custom");
            oissu.cookie["bubble"] = false;
            oissu.cookie["image"] = false;
            oissu.cookie["custom"] = false;
        } else {
            $("body").toggleClass("oissu-image");
            $("body").toggleClass("oissu-bubble");
            oissu.cookie["bubble"] = !oissu.cookie["bubble"];
            oissu.cookie["image"] = !oissu.cookie["image"];
        }
        updateConfig();
    };

    oissu.fullscreenToggle = function (oissuEmbed) {
        let oissuEmbedFullscreen = $(oissuEmbed).clone(true, true);
        $(".oissu__embed.fullscreen").replaceWith(
            $(oissuEmbedFullscreen).addClass("fullscreen")
        );
        $(".oissu.fullscreen").click(function (e) {
            e.stopPropagation();
        });
        $(".oissu.fullscreen").css(
            "width",
            `${oissu.cookie["fullscreenWidth"]}px`
        );
        $(".oissu__embed.fullscreen .os-t-fullscreen")
            .html(
                `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2px" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>`
            )
            .attr("data-tippy-content", "Minimize");

        $(".oissu__background").fadeToggle(200);
        $("body").toggleClass("oissu-expanded");

        createSingleton(
            tippy($(oissuEmbedFullscreen).find(".os-toolbar .tippy").toArray()),
            {
                theme: "oissu oissu-button",
            }
        );
        tippy($(oissuEmbedFullscreen).find(".os-note-inline").toArray(), {
            interactive: true,
            appendTo: () => document.body,
        });
    };

    oissu.start = function (oissuEmbed) {
        $(oissuEmbed).removeClass("oissu-notice-prompt-visible");
        const el = $(oissuEmbed).find("div.oissu"),
            curHeight = el.height(),
            autoHeight = el.css("height", "auto").height();
        el.height(curHeight).animate(
            {
                height: autoHeight,
            },
            200,
            function () {
                $(oissuEmbed)
                    .find("div.oissu")
                    .css("height", "")
                    .removeClass("oissu-loading");
                $(oissuEmbed).find(".oissu-prompt").remove();
                $(oissuEmbed).find(".oissu-prompt__greyout").remove();
            }
        );
        $(oissuEmbed)
            .find("a.os-note-inline")
            .each(function () {
                $(this).attr("id", $(this).attr("data-id"));
            });
    };

    oissu.format = function (oissuEmbed) {
        $(oissuEmbed)
            .find("p")
            .each(function () {
                if (
                    $(this)
                        .html()
                        .replace(/\s|&nbsp;/g, "")
                        .replace(/<br>|<br\s*?\/>/g, "").length == 0
                )
                    $(this).remove();
            });
        // console.log(this);
        if ($(oissuEmbed).find("[data-notice-type]").length > 0) {
            initNotice(oissuEmbed);
        }

        const oissuDialogue = $(oissuEmbed).find("div.oissu");
        const oissuStorySettings = [
            "display",
            "display-custom",
            "prev",
            "next",
            "directory",
        ];
        if (typeof oissu.config.defaults !== "undefined") {
            for (const setting of oissuStorySettings) {
                if (
                    typeof oissu.config.defaults[setting] !== "undefined" &&
                    !$(oissuDialogue).attr(`data-oissu-${setting}`)
                ) {
                    $(oissuDialogue).attr(
                        `data-oissu-${setting}`,
                        oissu.config.defaults[setting]
                    );
                }
            }
        }
        let cache = $(`<div class="os-cache-exclude"></div>`);
        let dialogue = $(`<div></div>`);
        $(oissuDialogue).append(`<div class="end"></div>`);
        let chat = $(oissuDialogue).children();
        let prevUnit = $('<div class="os-unit"></div>');
        let prevName = "Oi~ssu";
        chat.each(function () {
            if (
                $(this).hasClass("oissu-notice") ||
                $(this).hasClass("os-exclude")
            ) {
                return;
            }
            // console.log($(this).contents());
            // console.log(prevName);
            const thisHTML = $(this).html().trim();
            const thisOuterHTML = $(this).prop("outerHTML");
            const newIdentifier =
                (thisHTML.startsWith("<b") ||
                    thisHTML.startsWith("<strong") ||
                    $(this).hasClass("end") ||
                    (!thisHTML.startsWith("<b") &&
                        $(cache).hasClass("os-rich"))) &&
                thisOuterHTML.startsWith("<p");
            const newRichUnit =
                thisOuterHTML.startsWith("<div") ||
                thisOuterHTML.startsWith("<blockquote") ||
                thisOuterHTML.startsWith("<figure") ||
                thisOuterHTML.startsWith("<img");
            const block = thisOuterHTML.startsWith("<blockquote");
            if (newIdentifier || newRichUnit) {
                let name = "";
                if (
                    newIdentifier &&
                    ($(this).children().first().is("b") ||
                        $(this).children().first().is("strong")) &&
                    $(this).children().first().text().trim().endsWith(":")
                ) {
                    name = $(this).children().first().text().replace(":", "");
                    $(this).children().first().remove();
                }
                if (!name) {
                    name = prevName;
                }
                if (!$(cache).hasClass("os-cache-exclude")) {
                    let unit = $("<div></div>").addClass("os-unit");
                    if ($(cache).is("[character]")) {
                        $(unit).attr("character", $(cache).attr("character"));
                        let thisName = $(cache).attr("character");
                        $(unit)
                            .append(
                                $("<img></img>")
                                    .addClass("os-identifier")
                                    .attr(`src`, "")
                            )
                            .append(
                                $("<span></span>")
                                    .addClass("os-identifier")
                                    .text(thisName)
                            );
                    }
                    $(unit).append(cache);
                    $(dialogue).append(unit);
                }

                if (newIdentifier) {
                    cache = $(`<div></div>`).addClass(`os-content os-lines`);
                    $(cache).attr("character", name);
                    $(cache).append(`<p>` + $(this).html() + `</p>`);
                    prevName = name;
                } else {
                    cache = $(`<div></div>`).addClass(`os-content os-rich`);
                    $(cache).append($(this).html());
                    if (block) {
                        $(cache).addClass("os-blockquote");
                        $(cache)
                            .children()
                            .each(function () {
                                const blockquoteText = $(this)
                                    .text()
                                    .trim()
                                    .toLowerCase()
                                    .replace(/[\[\]']+/g, "");
                                if (blockquoteText.startsWith("location")) {
                                    $(this)
                                        .prepend(
                                            `<i data-feather="map-pin"></i>`
                                        )
                                        .wrap("<div></div>")
                                        .parent()
                                        .addClass("os-location")
                                        .prepend(
                                            `<span class="os-hr left"></span><span class="os-hr right"></span>`
                                        );
                                } else if (
                                    blockquoteText.startsWith("season")
                                ) {
                                    $(this)
                                        .addClass("os-season")
                                        .addClass("os-block")
                                        .prepend(
                                            `<i data-feather="thermometer"></i>`
                                        );
                                } else if (blockquoteText.startsWith("time")) {
                                    $(this)
                                        .addClass("os-time")
                                        .addClass("os-block")
                                        .prepend(
                                            `<i data-feather="clock"></i>`
                                        );
                                } else if ($(this).hasClass("os-block")) {
                                    $(this).addClass("os-block");
                                } else {
                                    $(this)
                                        .wrap("<div></div>")
                                        .parent()
                                        .addClass("os-narration");
                                }
                            });
                    }
                    //console.log('.');
                }
            } else {
                $(cache).append(`<p>` + $(this).html() + `</p>`);
            }
            $(this).remove();
        });
        $(oissuDialogue).append($(dialogue).children());
        $(oissuEmbed).removeClass("oissu__embed-loading");
        initNotes(oissuEmbed);
        initToolbar(oissuEmbed);
        initImages(oissuEmbed);
        initFonts(oissuEmbed);
        if (!$(oissuEmbed).hasClass("oissu-notice-prompt-visible")) {
            oissu.start(oissuEmbed);
        }
    };

    oissu.mao = function () {
        console.log(
            `%c If you're seeing this, your browser probably doesn't support this GIF so go here instead! https://static.wikia.nocookie.net/ensemble-stars/images/6/65/(Mundane_Specialty)_Mao_Isara_Chibi.gif`,
            `display: block;padding: 0px 0px 251px 197px;margin: 10px;border-radius: 5px;font-size: 0;background:center/100% no-repeat url("https://static.wikia.nocookie.net/ensemble-stars/images/6/65/(Mundane_Specialty)_Mao_Isara_Chibi.gif");/*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*/`
        );
    };

    oissu.initialize = function () {
        if (
            $("div.oissu:not([data-oissu-loaded]):not(.fullscreen)").length &&
            !oissu.disabled
        ) {
            tippy.setDefaultProps({
                maxWidth: 350,
                allowHTML: true,
                animation: "shift-away",
                offset: [0, 5],
                delay: [0, 200],
                zIndex: 99999999999,
                arrow: false,
                moveTransition: "transform 0.2s ease",
                theme: "oissu",
                // interactive: true,
                // hideOnClick: true,
                // trigger: "click",
            });

            $("div.oissu:not([data-oissu-loaded])")
                .attr("data-oissu-loaded", true)
                .addClass("oissu-loading")
                .wrap(`<div class="oissu__embed oissu__embed-loading"></div>`)
                .before(oissu.loader);

            initConfig();
            initCookie();
            initFullscreen();

            $(".oissu__embed.oissu__embed-loading").each(function (i) {
                if (
                    typeof oissu.config["no-selection"] === "undefined"
                        ? true
                        : oissu.config["no-selection"]
                ) {
                    // console.log("no-s");
                    $(this).css("user-select", "none");
                }
                $(this).data("oissu-instance", i);
                oissu.format($(this));
            });

            feather.replace({
                width: "1em",
                height: "1em",
                "stroke-width": "2px",
            });
            $(".unhide").click(function () {
                oissu.start($(this).closest(".oissu__embed"));
                $($(this).closest(".oissu-notice")).removeClass(
                    "oissu-notice-prompt"
                );
                setTimeout(function () {
                    $($(this).closest(".oissu-notice")).hide();
                }, 5000);
            });
            $(".os-t-chat").click(function () {
                oissu.chatToggle();
            });
            $(".os-t-fullscreen").click(function () {
                oissu.fullscreenToggle($(this).closest(".oissu__embed"));
            });

            if (
                typeof oissu.config["analytics"] === "undefined"
                    ? false
                    : oissu.config["analytics"]
            ) {
                $("body").append(analyticsIframe);
            }
        }
    };

    function initNotes(oissuEmbed) {
        let noteInline = $(oissuEmbed).find("sup");
        let noteList = $(".os-note").children();
        noteInline.each(function () {
            const noteNumber = $(this)
                .text()
                .replace(/[\[\]']+/g, "");
            // console.log(noteNumber);
            const note = $(noteList[noteNumber - 1]);
            $(note)
                .attr("id", `os-note-${noteNumber}`)
                .append(
                    `<a href="#os-note-inline-${noteNumber}">
                    <i data-feather="arrow-up"></i>
                    </a>`
                );
            const noteLinked = $(
                `<a class="os-note-inline" data-id="os-note-inline-${noteNumber}"></a>`
            )
                .attr("data-tippy-content", note.html())
                .attr("href", `#os-note-${noteNumber}`)
                .text(noteNumber);
            $(this).replaceWith(noteLinked);
        });

        tippy($(oissuEmbed).find(".os-note-inline").toArray(), {
            interactive: true,
            appendTo: () => document.body,
        });
    }

    function initNotice(oissuEmbed) {
        let notice = $(`<div class="oissu-notice"></div>`);

        let noticeBlockquote = $(oissuEmbed).find("[data-notice-type]").last();
        let noticeContent = $(noticeBlockquote).html();
        let noticeType = $(noticeBlockquote).attr("data-notice-type");
        let noticePrompt = $(noticeBlockquote).attr("data-notice-prompt");

        notice.addClass("os-notice__" + noticeType);
        notice.append(noticeContent);

        if (noticePrompt) {
            $(oissuEmbed)
                .prepend($(`<div class="oissu-prompt__greyout"></div>`))
                .prepend(
                    $(`<div class="oissu-prompt"></div>`)
                        .append(
                            $(notice)
                                .clone()
                                .addClass("oissu-notice-prompt")
                                .append(
                                    `<div class="oissu-notice__confirm"><button class="unhide" type="button">I understand</button></div>`
                                )
                        )
                        .append(oissu.logo)
                );
            $(oissuEmbed).addClass("oissu-notice-prompt-visible");
        }
        $(oissuEmbed).find("div.oissu").prepend(notice);
        // $(notice).css("margin-bottom", -1 * $(notice).outerHeight());
        $(oissuEmbed).find("[data-notice-type]").remove();
    }

    function initToolbar(oissuEmbed) {
        const oissuDialogue = $(oissuEmbed).find("div.oissu");
        let toolbar = $(`<div class="os-toolbar"></div>`);
        let tools = $(`<div class="os-toolbar__section tools"></div>`);
        if (
            typeof oissu.config["chat-format"] === "undefined"
                ? true
                : oissu.config["chat-format"]
        ) {
            $(tools)
                .append(`<a class="tippy os-t-chat" data-tippy-content="Chat Format"><i data-feather="message-square"></i></a>
            `);
        }
        if (
            typeof oissu.config["fullscreen"] === "undefined"
                ? true
                : oissu.config["fullscreen"]
        ) {
            $(tools)
                .append(`<a class="tippy os-t-fullscreen" data-tippy-content="Maximize"><i data-feather="maximize"></i></a>
            `);
        }
        if ($(tools).children().length) {
            $(toolbar).append(tools);
        }
        let credits = $(
            `<div class="os-credits"><a href="https://github.com/mgn-yuuki/enstars" target="_blank" rel="noopener noreferrer">${oissu.logo}</a></div>`
        );

        if (
            ($(oissuDialogue).attr("data-oissu-prev") ||
                $(oissuDialogue).attr("data-oissu-next") ||
                $(oissuDialogue).attr("data-oissu-directory")) &&
            (typeof oissu.config["navigation"] === "undefined"
                ? true
                : oissu.config["navigation"])
        ) {
            let navbar = $("<nav></nav>").addClass(`os-toolbar__section nav`);
            const prev = $(oissuDialogue).attr("data-oissu-prev"),
                directory = $(oissuDialogue).attr("data-oissu-directory"),
                next = $(oissuDialogue).attr("data-oissu-next");
            if (prev) {
                $(navbar).append(
                    $("<a></a>")
                        .attr({
                            "data-tippy-content": prev.substring(
                                prev.indexOf(" ") + 1
                            ),
                            href: prev.substring(0, prev.indexOf(" ")),
                        })
                        .html(`<i data-feather="arrow-left"></i>`)
                );
            }
            if (directory) {
                $(navbar).append(
                    $("<a></a>")
                        .attr({
                            "data-tippy-content": directory.substring(
                                directory.indexOf(" ") + 1
                            ),
                            href: directory.substring(
                                0,
                                directory.indexOf(" ")
                            ),
                        })
                        .html(`<i data-feather="list"></i>`)
                );
            }
            if (next) {
                $(navbar).append(
                    $("<a></a>")
                        .attr({
                            "data-tippy-content": next.substring(
                                next.indexOf(" ") + 1
                            ),
                            href: next.substring(0, next.indexOf(" ")),
                        })
                        .html(`<i data-feather="arrow-right"></i>`)
                );
            }
            $(toolbar).append(navbar);
        }
        $(oissuEmbed)
            .prepend($(toolbar).clone().addClass("top"))
            .append($(toolbar).clone().addClass("bottom"))
            .append(credits);

        createSingleton(
            tippy(
                $(oissuEmbed).find(".os-toolbar [data-tippy-content]").toArray()
            ),
            {
                theme: "oissu oissu-button",
            }
        );
        let context = new Context(".os-t-chat", [
            {
                type: "item",
                label: "Custom Options",
            },
            {
                type: "item",
                label: `<i data-feather="image"></i>Display Images`,
                callback: () => {
                    oissu.imageToggle();
                    $("body").toggleClass("oissu-custom");
                    oissu.cookie["custom"] = !oissu.cookie["custom"];
                    updateConfig();
                },
            },
            {
                type: "item",
                label: `<i data-feather="message-circle"></i>Bubble Format`,
                callback: () => {
                    oissu.bubbleToggle();
                    $("body").toggleClass("oissu-custom");
                    oissu.cookie["custom"] = !oissu.cookie["custom"];
                    updateConfig();
                },
            },
        ]);
    }

    function initImages(oissuEmbed) {
        // code snippet modified from twitter/@gayandasleep <3
        const i = $(oissuEmbed).data("oissu-instance");
        const oissuDialogue = $(oissuEmbed).find("div.oissu");

        const series = $(oissuDialogue).attr("data-oissu-series") || "enstars";
        const defaultPack =
            series === "enstars" ? "es-idol-outfit" : "winter-student-outfit";
        console.log(series);
        let icons = []; // Should always an array of arrays
        const customicons = [];

        $.ajaxSetup({
            async: false,
        });

        $.getJSON(
            `https://uchuu.yuukun.dev/oissu/icons/${series}/${defaultPack}/_pack.json`,
            function (data) {
                icons.push(data.icons);
            }
        );

        const displayCustom = $(oissuDialogue).attr(
            "data-oissu-display-custom"
        );
        const display = $(oissuDialogue).attr("data-oissu-display");
        if (displayCustom) {
            // console.log(i + "y");
            customicons.push(JSON.parse(displayCustom));
        }

        if (display) {
            $.each(display.split(","), function () {
                $.getJSON(
                    `https://uchuu.yuukun.dev/oissu/icons/${series}/${this}/_pack.json`,
                    function (data) {
                        customicons.push(data.icons);
                    }
                );
            });
            icons = customicons.concat(icons);
        }

        // Based on order of icon packs, figure out which
        // file to use for each character's icon
        oissu.instances[i] = { icons: {} };
        for (const iconPack of icons) {
            for (const icon of iconPack) {
                const key = icon.commonname.toLowerCase();
                if (!oissu.instances[i].icons[key]) {
                    oissu.instances[i].icons[key] = icon.filename;
                }
            }
        }

        refreshImages(oissuEmbed);
    }

    function initFonts(oissuEmbed) {
        const fontItems = $(oissuEmbed).find("font");
        $(fontItems).each(function () {
            switch ($(this).attr("class")) {
                case "natsume":
                    $(this).text($(this).attr("data-oissu"));
                    break;
                case "tsukasa":
                    $(this).text($(this).attr("data-oissu"));
                    break;
                case "spoiler":
                    $(this).click(function () {
                        $(this).toggleClass("spoiler__visible");
                    });
                    break;
            }
        });
    }

    function refreshImages(oissuEmbed) {
        let i = $(oissuEmbed).data("oissu-instance");
        $(oissuEmbed)
            .find("img.os-identifier")
            .each(function () {
                let characterName = $(this)
                    .closest(".os-unit")
                    .first()
                    .attr("character")
                    .trim();
                characterName = characterName.toLowerCase();
                $(this).attr("src", oissu.instances[i].icons[characterName]);
            });
    }

    function initCookie() {
        let osck = localStorage.getItem("osck");
        if (osck === null) {
            osck = JSON.stringify(oissu.cookie);
            localStorage.setItem("osck", osck);
        }
        oissu.cookie = JSON.parse(osck);
        // console.log(oissu.cookie);
        if (oissu.cookie["image"]) {
            $("body").addClass("oissu-image");
        }
        if (oissu.cookie["bubble"]) {
            $("body").addClass("oissu-bubble");
        }
        if (oissu.cookie["custom"]) {
            $("body").addClass("oissu-custom");
        }
    }

    function initConfig() {
        if ($("script[oissu]").length > 0) {
            oissu.config = yaml.load(
                $("script[oissu]").html().substring(1).slice(0, -1)
            );
            // console.log(oissu.config);
            if (typeof oissu.config === "undefined") {
                oissu.config = {};
            }
        }

        if (typeof oissu.config.styles !== "undefined") {
            if (Object.keys(oissu.config.styles).length) {
                let customStyle = "";
                for (const style in oissu.config.styles) {
                    customStyle =
                        customStyle +
                        `--os-${style}: ${oissu.config.styles[style]};`;
                }
                // console.log(customStyle);
                $("head").prepend(`<style>body{${customStyle}}</style>`);
            }
        }

        // console.log(oissu.config);
    }

    function updateConfig() {
        localStorage.setItem("osck", JSON.stringify(oissu.cookie));
    }

    function initFullscreen() {
        $("body").append(`
            <div class="oissu__background fullscreen" style="display: none;">
            <div class="oissu__wrapper fullscreen">
            <div class="oissu fullscreen">
            <div class="oissu__embed fullscreen">
            </div></div></div></div>`);

        $(".oissu__background.fullscreen").click(function () {
            $(".oissu__background").fadeOut(200);
            $("body").removeClass("oissu-expanded");
        });

        interact(".oissu.fullscreen").resizable({
            edges: { top: false, left: false, bottom: false, right: true },
            listeners: {
                move: function (event) {
                    Object.assign(event.target.style, {
                        width: `${
                            event.target.clientWidth + event.deltaRect.width * 2
                        }px`,
                    });
                },
                onend: function (event) {
                    oissu.cookie["fullscreenWidth"] = event.target.clientWidth;
                    updateConfig();
                },
            },
            inertia: {
                resistance: 0,
            },
        });
    }
})((window.oissu = window.oissu || {}), jQuery);

$("document").ready(function () {
    oissu.mao();
    oissu.initialize();
});
