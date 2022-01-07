import { configureAxe } from "jest-axe";

export const axe = configureAxe({
  globalOptions: {
    // checks are that actual test taht run on the code
    checks: [
      {
        id: "img-alt-redundant",
        // new axe function verification
        evaluate(node) {
          const altAttribute = node.getAttribute("alt");
          if (!altAttribute) return true;
          return !altAttribute.match(/(photo|image|logo|picture)/i);
        },
        metadata: {
          impact: "minor",
          messages: {
            pass: "img alt tag does not contain redundant words",
            fails:
              "img alt tag contain one or more redundant words: photo, image, logo",
          },
        },
      },
    ],
    // rules enable checks, group them, define what to check
    rules: [
      {
        id: "img-alt-redundant",
        enabled: true,
        selector: "img", // css selector to filter elements to which rule applies
        any: ["img-alt-redundant"],
        metadata: {
          description: "img alt tag cannot contain redundant words",
          help: "img alt tag cannot contain redundant words",
        },
      },
    ],
  },
});
