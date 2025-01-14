import { o as observer, u as useStores, r as reactExports, j as jsxRuntimeExports } from "./index-Z5l1I7Mm.js";
function OnePage() {
  const store = useStores();
  reactExports.useEffect(() => {
    store.app.initAppointAll();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    children: "OnePage"
  });
}
const ObservedOnePage = observer(OnePage);
export {
  ObservedOnePage as default
};
