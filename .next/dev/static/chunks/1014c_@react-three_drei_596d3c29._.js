(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrbitControls",
    ()=>OrbitControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/controls/OrbitControls.js [app-client] (ecmascript)");
;
;
;
;
const OrbitControls = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ makeDefault, camera, regress, domElement, enableDamping = true, keyEvents = false, onChange, onStart, onEnd, ...restProps }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[invalidate]": (state)=>state.invalidate
    }["OrbitControls.useThree[invalidate]"]);
    const defaultCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[defaultCamera]": (state)=>state.camera
    }["OrbitControls.useThree[defaultCamera]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[gl]": (state)=>state.gl
    }["OrbitControls.useThree[gl]"]);
    const events = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[events]": (state)=>state.events
    }["OrbitControls.useThree[events]"]);
    const setEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[setEvents]": (state)=>state.setEvents
    }["OrbitControls.useThree[setEvents]"]);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[set]": (state)=>state.set
    }["OrbitControls.useThree[set]"]);
    const get = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[get]": (state)=>state.get
    }["OrbitControls.useThree[get]"]);
    const performance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "OrbitControls.useThree[performance]": (state)=>state.performance
    }["OrbitControls.useThree[performance]"]);
    const explCamera = camera || defaultCamera;
    const explDomElement = domElement || events.connected || gl.domElement;
    const controls = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "OrbitControls.useMemo[controls]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](explCamera)
    }["OrbitControls.useMemo[controls]"], [
        explCamera
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "OrbitControls.useFrame": ()=>{
            if (controls.enabled) controls.update();
        }
    }["OrbitControls.useFrame"], -1);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            if (keyEvents) {
                controls.connect(keyEvents === true ? explDomElement : keyEvents);
            }
            controls.connect(explDomElement);
            return ({
                "OrbitControls.useEffect": ()=>void controls.dispose()
            })["OrbitControls.useEffect"];
        }
    }["OrbitControls.useEffect"], [
        keyEvents,
        explDomElement,
        regress,
        controls,
        invalidate
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            const callback = {
                "OrbitControls.useEffect.callback": (e)=>{
                    invalidate();
                    if (regress) performance.regress();
                    if (onChange) onChange(e);
                }
            }["OrbitControls.useEffect.callback"];
            const onStartCb = {
                "OrbitControls.useEffect.onStartCb": (e)=>{
                    if (onStart) onStart(e);
                }
            }["OrbitControls.useEffect.onStartCb"];
            const onEndCb = {
                "OrbitControls.useEffect.onEndCb": (e)=>{
                    if (onEnd) onEnd(e);
                }
            }["OrbitControls.useEffect.onEndCb"];
            controls.addEventListener('change', callback);
            controls.addEventListener('start', onStartCb);
            controls.addEventListener('end', onEndCb);
            return ({
                "OrbitControls.useEffect": ()=>{
                    controls.removeEventListener('start', onStartCb);
                    controls.removeEventListener('end', onEndCb);
                    controls.removeEventListener('change', callback);
                }
            })["OrbitControls.useEffect"];
        }
    }["OrbitControls.useEffect"], [
        onChange,
        onStart,
        onEnd,
        controls,
        invalidate,
        setEvents
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "OrbitControls.useEffect": ()=>{
            if (makeDefault) {
                const old = get().controls;
                // @ts-ignore https://github.com/three-types/three-ts-types/pull/1398
                set({
                    controls
                });
                return ({
                    "OrbitControls.useEffect": ()=>set({
                            controls: old
                        })
                })["OrbitControls.useEffect"];
            }
        }
    }["OrbitControls.useEffect"], [
        makeDefault,
        controls
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref,
        object: controls,
        enableDamping: enableDamping
    }, restProps));
});
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box,
    "Capsule",
    ()=>Capsule,
    "Circle",
    ()=>Circle,
    "Cone",
    ()=>Cone,
    "Cylinder",
    ()=>Cylinder,
    "Dodecahedron",
    ()=>Dodecahedron,
    "Extrude",
    ()=>Extrude,
    "Icosahedron",
    ()=>Icosahedron,
    "Lathe",
    ()=>Lathe,
    "Octahedron",
    ()=>Octahedron,
    "Plane",
    ()=>Plane,
    "Polyhedron",
    ()=>Polyhedron,
    "Ring",
    ()=>Ring,
    "Shape",
    ()=>Shape,
    "Sphere",
    ()=>Sphere,
    "Tetrahedron",
    ()=>Tetrahedron,
    "Torus",
    ()=>Torus,
    "TorusKnot",
    ()=>TorusKnot,
    "Tube",
    ()=>Tube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
function create(type, effect) {
    const El = type + 'Geometry';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ args, children, ...props }, fref)=>{
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](fref, {
            "create.useImperativeHandle": ()=>ref.current
        }["create.useImperativeHandle"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
            "create.useLayoutEffect": ()=>void (effect == null ? void 0 : effect(ref.current))
        }["create.useLayoutEffect"]);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            ref: ref
        }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](El, {
            attach: "geometry",
            args: args
        }), children);
    });
}
const Box = /* @__PURE__ */ create('box');
const Circle = /* @__PURE__ */ create('circle');
const Cone = /* @__PURE__ */ create('cone');
const Cylinder = /* @__PURE__ */ create('cylinder');
const Sphere = /* @__PURE__ */ create('sphere');
const Plane = /* @__PURE__ */ create('plane');
const Tube = /* @__PURE__ */ create('tube');
const Torus = /* @__PURE__ */ create('torus');
const TorusKnot = /* @__PURE__ */ create('torusKnot');
const Tetrahedron = /* @__PURE__ */ create('tetrahedron');
const Ring = /* @__PURE__ */ create('ring');
const Polyhedron = /* @__PURE__ */ create('polyhedron');
const Icosahedron = /* @__PURE__ */ create('icosahedron');
const Octahedron = /* @__PURE__ */ create('octahedron');
const Dodecahedron = /* @__PURE__ */ create('dodecahedron');
const Extrude = /* @__PURE__ */ create('extrude');
const Lathe = /* @__PURE__ */ create('lathe');
const Capsule = /* @__PURE__ */ create('capsule');
const Shape = /* @__PURE__ */ create('shape', ({ geometry })=>{
    // Calculate UVs (by https://discourse.threejs.org/u/prisoner849)
    // https://discourse.threejs.org/t/custom-shape-in-image-not-working/49348/10
    const pos = geometry.attributes.position;
    const b3 = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromBufferAttribute(pos);
    const b3size = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
    b3.getSize(b3size);
    const uv = [];
    let x = 0, y = 0, u = 0, v = 0;
    for(let i = 0; i < pos.count; i++){
        x = pos.getX(i);
        y = pos.getY(i);
        u = (x - b3.min.x) / b3size.x;
        v = (y - b3.min.y) / b3size.y;
        uv.push(u, v);
    }
    geometry.setAttribute('uv', new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uv, 2));
});
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>distort
]);
var distort = "#define GLSLIFY 1\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}"; // eslint-disable-line
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/MeshDistortMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshDistortMaterial",
    ()=>MeshDistortMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/glsl/distort.vert.glsl.js [app-client] (ecmascript)");
;
;
;
;
;
class DistortMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    constructor(parameters = {}){
        super(parameters);
        this.setValues(parameters);
        this._time = {
            value: 0
        };
        this._distort = {
            value: 0.4
        };
        this._radius = {
            value: 1
        };
    }
    // FIXME Use `THREE.WebGLProgramParametersWithUniforms` type when able to target @types/three@0.160.0
    onBeforeCompile(shader) {
        shader.uniforms.time = this._time;
        shader.uniforms.radius = this._radius;
        shader.uniforms.distort = this._distort;
        shader.vertexShader = `
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$glsl$2f$distort$2e$vert$2e$glsl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]}
      ${shader.vertexShader}
    `;
        shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', `
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `);
    }
    get time() {
        return this._time.value;
    }
    set time(v) {
        this._time.value = v;
    }
    get distort() {
        return this._distort.value;
    }
    set distort(v) {
        this._distort.value = v;
    }
    get radius() {
        return this._radius.value;
    }
    set radius(v) {
        this._radius.value = v;
    }
}
const MeshDistortMaterial = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ speed = 1, ...props }, ref)=>{
    const [material] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshDistortMaterial.useState": ()=>new DistortMaterialImpl()
    }["MeshDistortMaterial.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MeshDistortMaterial.useFrame": (state)=>material && (material.time = state.clock.elapsedTime * speed)
    }["MeshDistortMaterial.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: material,
        ref: ref,
        attach: "material"
    }, props));
});
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/Float.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Float",
    ()=>Float
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
;
;
const Float = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, enabled = true, speed = 1, rotationIntensity = 1, floatIntensity = 1, floatingRange = [
    -0.1,
    0.1
], autoInvalidate = false, ...props }, forwardRef)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardRef, {
        "Float.useImperativeHandle": ()=>ref.current
    }["Float.useImperativeHandle"], []);
    const offset = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](Math.random() * 10000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Float.useFrame": (state)=>{
            var _floatingRange$, _floatingRange$2;
            if (!enabled || speed === 0) return;
            if (autoInvalidate) state.invalidate();
            const t = offset.current + state.clock.elapsedTime;
            ref.current.rotation.x = Math.cos(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.y = Math.sin(t / 4 * speed) / 8 * rotationIntensity;
            ref.current.rotation.z = Math.sin(t / 4 * speed) / 20 * rotationIntensity;
            let yPosition = Math.sin(t / 4 * speed) / 10;
            yPosition = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].mapLinear(yPosition, -0.1, 0.1, (_floatingRange$ = floatingRange == null ? void 0 : floatingRange[0]) !== null && _floatingRange$ !== void 0 ? _floatingRange$ : -0.1, (_floatingRange$2 = floatingRange == null ? void 0 : floatingRange[1]) !== null && _floatingRange$2 !== void 0 ? _floatingRange$2 : 0.1);
            ref.current.position.y = yPosition * floatIntensity;
            ref.current.updateMatrix();
        }
    }["Float.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", props, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: ref,
        matrixAutoUpdate: false
    }, children));
});
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "presetsObj",
    ()=>presetsObj
]);
const presetsObj = {
    apartment: 'lebombo_1k.hdr',
    city: 'potsdamer_platz_1k.hdr',
    dawn: 'kiara_1_dawn_1k.hdr',
    forest: 'forest_slope_1k.hdr',
    lobby: 'st_fagans_interior_1k.hdr',
    night: 'dikhololo_night_1k.hdr',
    park: 'rooitou_park_1k.hdr',
    studio: 'studio_small_03_1k.hdr',
    sunset: 'venice_sunset_1k.hdr',
    warehouse: 'empty_warehouse_01_1k.hdr'
};
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/useEnvironment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEnvironment",
    ()=>useEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export G as useLoader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/loaders/RGBELoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$EXRLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/loaders/EXRLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$monogrid$2b$gainmap$2d$js$40$3$2e$2$2e$0_three$40$0$2e$181$2e$2$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@monogrid+gainmap-js@3.2.0_three@0.181.2/node_modules/@monogrid/gainmap-js/dist/decode.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/environment-assets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
const CUBEMAP_ROOT = 'https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/';
const isArray = (arr)=>Array.isArray(arr);
const defaultFiles = [
    '/px.png',
    '/nx.png',
    '/py.png',
    '/ny.png',
    '/pz.png',
    '/nz.png'
];
function useEnvironment({ files = defaultFiles, path = '', preset = undefined, colorSpace = undefined, extensions } = {}) {
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
        path = CUBEMAP_ROOT;
    }
    // Everything else
    const multiFile = isArray(files);
    const { extension, isCubemap } = getExtension(files);
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useEnvironment.useThree[gl]": (state)=>state.gl
    }["useEnvironment.useThree[gl]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useEnvironment.useLayoutEffect": ()=>{
            // Only required for gainmap
            if (extension !== 'webp' && extension !== 'jpg' && extension !== 'jpeg') return;
            function clearGainmapTexture() {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].clear(loader, multiFile ? [
                    files
                ] : files);
            }
            gl.domElement.addEventListener('webglcontextlost', clearGainmapTexture, {
                once: true
            });
        }
    }["useEnvironment.useLayoutEffect"], [
        files,
        gl.domElement
    ]);
    const loaderResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"])(loader, multiFile ? [
        files
    ] : files, {
        "useEnvironment.useLoader[loaderResult]": (loader)=>{
            // Gainmap requires a renderer
            if (extension === 'webp' || extension === 'jpg' || extension === 'jpeg') {
                // @ts-expect-error
                loader.setRenderer(gl);
            }
            loader.setPath == null || loader.setPath(path);
            // @ts-expect-error
            if (extensions) extensions(loader);
        }
    }["useEnvironment.useLoader[loaderResult]"]);
    let texture = multiFile ? // @ts-ignore
    loaderResult[0] : loaderResult;
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'webp') {
        var _renderTarget;
        texture = (_renderTarget = texture.renderTarget) == null ? void 0 : _renderTarget.texture;
    }
    texture.mapping = isCubemap ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeReflectionMapping"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EquirectangularReflectionMapping"];
    texture.colorSpace = colorSpace !== null && colorSpace !== void 0 ? colorSpace : isCubemap ? 'srgb' : 'srgb-linear';
    return texture;
}
const preloadDefaultOptions = {
    files: defaultFiles,
    path: '',
    preset: undefined,
    extensions: undefined
};
useEnvironment.preload = (preloadOptions)=>{
    const options = {
        ...preloadDefaultOptions,
        ...preloadOptions
    };
    let { files, path = '' } = options;
    const { preset, extensions } = options;
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
        path = CUBEMAP_ROOT;
    }
    const { extension } = getExtension(files);
    if (extension === 'webp' || extension === 'jpg' || extension === 'jpeg') {
        throw new Error('useEnvironment: Preloading gainmaps is not supported');
    }
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].preload(loader, isArray(files) ? [
        files
    ] : files, (loader)=>{
        loader.setPath == null || loader.setPath(path);
        // @ts-expect-error
        if (extensions) extensions(loader);
    });
};
const clearDefaultOptins = {
    files: defaultFiles,
    preset: undefined
};
useEnvironment.clear = (clearOptions)=>{
    const options = {
        ...clearDefaultOptins,
        ...clearOptions
    };
    let { files } = options;
    const { preset } = options;
    if (preset) {
        validatePreset(preset);
        files = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"][preset];
    }
    const { extension } = getExtension(files);
    const loader = getLoader(extension);
    if (!loader) throw new Error('useEnvironment: Unrecognized file extension: ' + files);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__G__as__useLoader$3e$__["useLoader"].clear(loader, isArray(files) ? [
        files
    ] : files);
};
function validatePreset(preset) {
    if (!(preset in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"])) throw new Error('Preset must be one of: ' + Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$environment$2d$assets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetsObj"]).join(', '));
}
function getExtension(files) {
    var _firstEntry$split$pop;
    const isCubemap = isArray(files) && files.length === 6;
    const isGainmap = isArray(files) && files.length === 3 && files.some((file)=>file.endsWith('json'));
    const firstEntry = isArray(files) ? files[0] : files;
    // Everything else
    const extension = isCubemap ? 'cube' : isGainmap ? 'webp' : firstEntry.startsWith('data:application/exr') ? 'exr' : firstEntry.startsWith('data:application/hdr') ? 'hdr' : firstEntry.startsWith('data:image/jpeg') ? 'jpg' : (_firstEntry$split$pop = firstEntry.split('.').pop()) == null || (_firstEntry$split$pop = _firstEntry$split$pop.split('?')) == null || (_firstEntry$split$pop = _firstEntry$split$pop.shift()) == null ? void 0 : _firstEntry$split$pop.toLowerCase();
    return {
        extension,
        isCubemap,
        isGainmap
    };
}
function getLoader(extension) {
    const loader = extension === 'cube' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTextureLoader"] : extension === 'hdr' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$RGBELoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBELoader"] : extension === 'exr' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$loaders$2f$EXRLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXRLoader"] : extension === 'jpg' || extension === 'jpeg' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$monogrid$2b$gainmap$2d$js$40$3$2e$2$2e$0_three$40$0$2e$181$2e$2$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HDRJPGLoader"] : extension === 'webp' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$monogrid$2b$gainmap$2d$js$40$3$2e$2$2e$0_three$40$0$2e$181$2e$2$2f$node_modules$2f40$monogrid$2f$gainmap$2d$js$2f$dist$2f$decode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GainMapLoader"] : null;
    return loader;
}
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Environment",
    ()=>Environment,
    "EnvironmentCube",
    ()=>EnvironmentCube,
    "EnvironmentMap",
    ()=>EnvironmentMap,
    "EnvironmentPortal",
    ()=>EnvironmentPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export o as createPortal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export s as applyProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$GroundProjectedEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/objects/GroundProjectedEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/useEnvironment.js [app-client] (ecmascript)");
;
;
;
;
;
;
const isRef = (obj)=>obj.current && obj.current.isScene;
const resolveScene = (scene)=>isRef(scene) ? scene.current : scene;
function setEnvProps(background, scene, defaultScene, texture, sceneProps = {}) {
    var _target$backgroundRot, _target$backgroundRot2, _target$environmentRo, _target$environmentRo2;
    // defaults
    sceneProps = {
        backgroundBlurriness: 0,
        backgroundIntensity: 1,
        backgroundRotation: [
            0,
            0,
            0
        ],
        environmentIntensity: 1,
        environmentRotation: [
            0,
            0,
            0
        ],
        ...sceneProps
    };
    const target = resolveScene(scene || defaultScene);
    const oldbg = target.background;
    const oldenv = target.environment;
    const oldSceneProps = {
        // @ts-ignore
        backgroundBlurriness: target.backgroundBlurriness,
        // @ts-ignore
        backgroundIntensity: target.backgroundIntensity,
        // @ts-ignore
        backgroundRotation: (_target$backgroundRot = (_target$backgroundRot2 = target.backgroundRotation) == null || _target$backgroundRot2.clone == null ? void 0 : _target$backgroundRot2.clone()) !== null && _target$backgroundRot !== void 0 ? _target$backgroundRot : [
            0,
            0,
            0
        ],
        // @ts-ignore
        environmentIntensity: target.environmentIntensity,
        // @ts-ignore
        environmentRotation: (_target$environmentRo = (_target$environmentRo2 = target.environmentRotation) == null || _target$environmentRo2.clone == null ? void 0 : _target$environmentRo2.clone()) !== null && _target$environmentRo !== void 0 ? _target$environmentRo : [
            0,
            0,
            0
        ]
    };
    if (background !== 'only') target.environment = texture;
    if (background) target.background = texture;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(target, sceneProps);
    return ()=>{
        if (background !== 'only') target.environment = oldenv;
        if (background) target.background = oldbg;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__applyProps$3e$__["applyProps"])(target, oldSceneProps);
    };
}
function EnvironmentMap({ scene, background = false, map, ...config }) {
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentMap.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentMap.useThree[defaultScene]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentMap.useLayoutEffect": ()=>{
            if (map) return setEnvProps(background, scene, defaultScene, map, config);
        }
    }["EnvironmentMap.useLayoutEffect"]);
    return null;
}
function EnvironmentCube({ background = false, scene, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, ...rest }) {
    const texture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironment"])(rest);
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentCube.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentCube.useThree[defaultScene]"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentCube.useLayoutEffect": ()=>{
            return setEnvProps(background, scene, defaultScene, texture, {
                backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
                backgroundIntensity,
                backgroundRotation,
                environmentIntensity,
                environmentRotation
            });
        }
    }["EnvironmentCube.useLayoutEffect"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "EnvironmentCube.useEffect": ()=>{
            return ({
                "EnvironmentCube.useEffect": ()=>{
                    texture.dispose();
                }
            })["EnvironmentCube.useEffect"];
        }
    }["EnvironmentCube.useEffect"], [
        texture
    ]);
    return null;
}
function EnvironmentPortal({ children, near = 0.1, far = 1000, resolution = 256, frames = 1, map, background = false, blur, backgroundBlurriness, backgroundIntensity, backgroundRotation, environmentIntensity, environmentRotation, scene, files, path, preset = undefined, extensions }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[gl]": (state)=>state.gl
    }["EnvironmentPortal.useThree[gl]"]);
    const defaultScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "EnvironmentPortal.useThree[defaultScene]": (state)=>state.scene
    }["EnvironmentPortal.useThree[defaultScene]"]);
    const camera = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [virtualScene] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "EnvironmentPortal.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]()
    }["EnvironmentPortal.useState"]);
    const fbo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EnvironmentPortal.useMemo[fbo]": ()=>{
            const fbo = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLCubeRenderTarget"](resolution);
            fbo.texture.type = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"];
            return fbo;
        }
    }["EnvironmentPortal.useMemo[fbo]"], [
        resolution
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "EnvironmentPortal.useEffect": ()=>{
            return ({
                "EnvironmentPortal.useEffect": ()=>{
                    fbo.dispose();
                }
            })["EnvironmentPortal.useEffect"];
        }
    }["EnvironmentPortal.useEffect"], [
        fbo
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "EnvironmentPortal.useLayoutEffect": ()=>{
            if (frames === 1) {
                const autoClear = gl.autoClear;
                gl.autoClear = true;
                camera.current.update(gl, virtualScene);
                gl.autoClear = autoClear;
            }
            return setEnvProps(background, scene, defaultScene, fbo.texture, {
                backgroundBlurriness: blur !== null && blur !== void 0 ? blur : backgroundBlurriness,
                backgroundIntensity,
                backgroundRotation,
                environmentIntensity,
                environmentRotation
            });
        }
    }["EnvironmentPortal.useLayoutEffect"], [
        children,
        virtualScene,
        fbo.texture,
        scene,
        defaultScene,
        background,
        frames,
        gl
    ]);
    let count = 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "EnvironmentPortal.useFrame": ()=>{
            if (frames === Infinity || count < frames) {
                const autoClear = gl.autoClear;
                gl.autoClear = true;
                camera.current.update(gl, virtualScene);
                gl.autoClear = autoClear;
                count++;
            }
        }
    }["EnvironmentPortal.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__o__as__createPortal$3e$__["createPortal"])(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("cubeCamera", {
        ref: camera,
        args: [
            near,
            far,
            fbo
        ]
    }), files || preset ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentCube, {
        background: true,
        files: files,
        preset: preset,
        path: path,
        extensions: extensions
    }) : map ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentMap, {
        background: true,
        map: map,
        extensions: extensions
    }) : null), virtualScene));
}
function EnvironmentGround(props) {
    var _props$ground, _props$ground2, _scale, _props$ground3;
    const textureDefault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$useEnvironment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEnvironment"])(props);
    const texture = props.map || textureDefault;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EnvironmentGround.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                GroundProjectedEnvImpl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$objects$2f$GroundProjectedEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroundProjectedEnv"]
            })
    }["EnvironmentGround.useMemo"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "EnvironmentGround.useEffect": ()=>{
            return ({
                "EnvironmentGround.useEffect": ()=>{
                    textureDefault.dispose();
                }
            })["EnvironmentGround.useEffect"];
        }
    }["EnvironmentGround.useEffect"], [
        textureDefault
    ]);
    const args = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "EnvironmentGround.useMemo[args]": ()=>[
                texture
            ]
    }["EnvironmentGround.useMemo[args]"], [
        texture
    ]);
    const height = (_props$ground = props.ground) == null ? void 0 : _props$ground.height;
    const radius = (_props$ground2 = props.ground) == null ? void 0 : _props$ground2.radius;
    const scale = (_scale = (_props$ground3 = props.ground) == null ? void 0 : _props$ground3.scale) !== null && _scale !== void 0 ? _scale : 1000;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentMap, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props, {
        map: texture
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("groundProjectedEnvImpl", {
        args: args,
        scale: scale,
        height: height,
        radius: radius
    }));
}
function Environment(props) {
    return props.ground ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentGround, props) : props.map ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentMap, props) : props.children ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentPortal, props) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](EnvironmentCube, props);
}
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/ContactShadows.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactShadows",
    ()=>ContactShadows
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$HorizontalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/shaders/HorizontalBlurShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$VerticalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three-stdlib@2.36.1_three@0.181.2/node_modules/three-stdlib/shaders/VerticalBlurShader.js [app-client] (ecmascript)");
;
;
;
;
;
const ContactShadows = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ scale = 10, frames = Infinity, opacity = 1, width = 1, height = 1, blur = 1, near = 0, far = 10, resolution = 512, smooth = true, color = '#000000', depthWrite = false, renderOrder, ...props }, fref)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "ContactShadows.useThree[scene]": (state)=>state.scene
    }["ContactShadows.useThree[scene]"]);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "ContactShadows.useThree[gl]": (state)=>state.gl
    }["ContactShadows.useThree[gl]"]);
    const shadowCamera = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
    height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
    const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ContactShadows.useMemo": ()=>{
            const renderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution);
            const renderTargetBlur = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](resolution, resolution);
            renderTargetBlur.texture.generateMipmaps = renderTarget.texture.generateMipmaps = false;
            const planeGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](width, height).rotateX(Math.PI / 2);
            const blurPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](planeGeometry);
            const depthMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]();
            depthMaterial.depthTest = depthMaterial.depthWrite = false;
            depthMaterial.onBeforeCompile = ({
                "ContactShadows.useMemo": (shader)=>{
                    shader.uniforms = {
                        ...shader.uniforms,
                        ucolor: {
                            value: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color)
                        }
                    };
                    shader.fragmentShader = shader.fragmentShader.replace(`void main() {`, //
                    `uniform vec3 ucolor;
           void main() {
          `);
                    shader.fragmentShader = shader.fragmentShader.replace('vec4( vec3( 1.0 - fragCoordZ ), opacity );', // Colorize the shadow, multiply by the falloff so that the center can remain darker
                    'vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );');
                }
            })["ContactShadows.useMemo"];
            const horizontalBlurMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$HorizontalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalBlurShader"]);
            const verticalBlurMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$2d$stdlib$40$2$2e$36$2e$1_three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2d$stdlib$2f$shaders$2f$VerticalBlurShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerticalBlurShader"]);
            verticalBlurMaterial.depthTest = horizontalBlurMaterial.depthTest = false;
            return [
                renderTarget,
                planeGeometry,
                depthMaterial,
                blurPlane,
                horizontalBlurMaterial,
                verticalBlurMaterial,
                renderTargetBlur
            ];
        }
    }["ContactShadows.useMemo"], [
        resolution,
        width,
        height,
        scale,
        color
    ]);
    const blurShadows = (blur)=>{
        blurPlane.visible = true;
        blurPlane.material = horizontalBlurMaterial;
        horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
        horizontalBlurMaterial.uniforms.h.value = blur * 1 / 256;
        gl.setRenderTarget(renderTargetBlur);
        gl.render(blurPlane, shadowCamera.current);
        blurPlane.material = verticalBlurMaterial;
        verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
        verticalBlurMaterial.uniforms.v.value = blur * 1 / 256;
        gl.setRenderTarget(renderTarget);
        gl.render(blurPlane, shadowCamera.current);
        blurPlane.visible = false;
    };
    let count = 0;
    let initialBackground;
    let initialOverrideMaterial;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ContactShadows.useFrame": ()=>{
            if (shadowCamera.current && (frames === Infinity || count < frames)) {
                count++;
                initialBackground = scene.background;
                initialOverrideMaterial = scene.overrideMaterial;
                ref.current.visible = false;
                scene.background = null;
                scene.overrideMaterial = depthMaterial;
                gl.setRenderTarget(renderTarget);
                gl.render(scene, shadowCamera.current);
                blurShadows(blur);
                if (smooth) blurShadows(blur * 0.4);
                gl.setRenderTarget(null);
                ref.current.visible = true;
                scene.overrideMaterial = initialOverrideMaterial;
                scene.background = initialBackground;
            }
        }
    }["ContactShadows.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](fref, {
        "ContactShadows.useImperativeHandle": ()=>ref.current
    }["ContactShadows.useImperativeHandle"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "rotation-x": Math.PI / 2
    }, props, {
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("mesh", {
        renderOrder: renderOrder,
        geometry: planeGeometry,
        scale: [
            1,
            -1,
            1
        ],
        rotation: [
            -Math.PI / 2,
            0,
            0
        ]
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshBasicMaterial", {
        transparent: true,
        map: renderTarget.texture,
        opacity: opacity,
        depthWrite: depthWrite
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("orthographicCamera", {
        ref: shadowCamera,
        args: [
            -width / 2,
            width / 2,
            height / 2,
            -height / 2,
            near,
            far
        ]
    }));
});
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
const getVersion = ()=>parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVISION"].replace(/\D+/g, ''));
const version = /* @__PURE__ */ getVersion();
;
}),
"[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/core/Sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/three@0.181.2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa/node_modules/@react-three/fiber/dist/events-f8cd670d.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/QB.Club/node_modules/.pnpm/@react-three+drei@10.7.7_@react-three+fiber@9.4.0_3bjo36fvh656ytvxc53nfgwqaa__@types+react@19_as6ikptnsj5s5xh5j6r3umsv2e/node_modules/@react-three/drei/helpers/constants.js [app-client] (ecmascript)");
;
;
;
;
;
class SparklesImplMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(){
        super({
            uniforms: {
                time: {
                    value: 0
                },
                pixelRatio: {
                    value: 1
                }
            },
            vertexShader: /* glsl */ `
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,
            fragmentShader: /* glsl */ `
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa_$5f40$types$2b$react$40$19_as6ikptnsj5s5xh5j6r3umsv2e$2f$node_modules$2f40$react$2d$three$2f$drei$2f$helpers$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"] >= 154 ? 'colorspace_fragment' : 'encodings_fragment'}>
        }
      `
        });
    }
    get time() {
        return this.uniforms.time.value;
    }
    set time(value) {
        this.uniforms.time.value = value;
    }
    get pixelRatio() {
        return this.uniforms.pixelRatio.value;
    }
    set pixelRatio(value) {
        this.uniforms.pixelRatio.value = value;
    }
}
const isFloat32Array = (def)=>def && def.constructor === Float32Array;
const expandColor = (v)=>[
        v.r,
        v.g,
        v.b
    ];
const isVector = (v)=>v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"] || v instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector4"];
const normalizeVector = (v)=>{
    if (Array.isArray(v)) return v;
    else if (isVector(v)) return v.toArray();
    return [
        v,
        v,
        v
    ];
};
function usePropAsIsOrAsAttribute(count, prop, setDefault) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "usePropAsIsOrAsAttribute.useMemo": ()=>{
            if (prop !== undefined) {
                if (isFloat32Array(prop)) {
                    return prop;
                } else {
                    if (prop instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]) {
                        const a = Array.from({
                            length: count * 3
                        }, {
                            "usePropAsIsOrAsAttribute.useMemo.a": ()=>expandColor(prop)
                        }["usePropAsIsOrAsAttribute.useMemo.a"]).flat();
                        return Float32Array.from(a);
                    } else if (isVector(prop) || Array.isArray(prop)) {
                        const a = Array.from({
                            length: count * 3
                        }, {
                            "usePropAsIsOrAsAttribute.useMemo.a": ()=>normalizeVector(prop)
                        }["usePropAsIsOrAsAttribute.useMemo.a"]).flat();
                        return Float32Array.from(a);
                    }
                    return Float32Array.from({
                        length: count
                    }, {
                        "usePropAsIsOrAsAttribute.useMemo": ()=>prop
                    }["usePropAsIsOrAsAttribute.useMemo"]);
                }
            }
            return Float32Array.from({
                length: count
            }, setDefault);
        }
    }["usePropAsIsOrAsAttribute.useMemo"], [
        prop
    ]);
}
const Sparkles = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ noise = 1, count = 100, speed = 1, opacity = 1, scale = 1, size, color, children, ...props }, forwardRef)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Sparkles.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
                SparklesImplMaterial
            })
    }["Sparkles.useMemo"], []);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const dpr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Sparkles.useThree[dpr]": (state)=>state.viewport.dpr
    }["Sparkles.useThree[dpr]"]);
    const _scale = normalizeVector(scale);
    const positions = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Sparkles.useMemo[positions]": ()=>Float32Array.from(Array.from({
                length: count
            }, {
                "Sparkles.useMemo[positions]": ()=>_scale.map(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].randFloatSpread)
            }["Sparkles.useMemo[positions]"]).flat())
    }["Sparkles.useMemo[positions]"], [
        count,
        ..._scale
    ]);
    const sizes = usePropAsIsOrAsAttribute(count, size, Math.random);
    const opacities = usePropAsIsOrAsAttribute(count, opacity);
    const speeds = usePropAsIsOrAsAttribute(count, speed);
    const noises = usePropAsIsOrAsAttribute(count * 3, noise);
    const colors = usePropAsIsOrAsAttribute(color === undefined ? count * 3 : count, !isFloat32Array(color) ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$181$2e$2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](color) : color, {
        "Sparkles.usePropAsIsOrAsAttribute[colors]": ()=>1
    }["Sparkles.usePropAsIsOrAsAttribute[colors]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$0_3bjo36fvh656ytvxc53nfgwqaa$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$f8cd670d$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Sparkles.useFrame": (state)=>{
            if (ref.current && ref.current.material) ref.current.material.time = state.clock.elapsedTime;
        }
    }["Sparkles.useFrame"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](forwardRef, {
        "Sparkles.useImperativeHandle": ()=>ref.current
    }["Sparkles.useImperativeHandle"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("points", (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        key: `particle-${count}-${JSON.stringify(scale)}`
    }, props, {
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferGeometry", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-position",
        args: [
            positions,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-size",
        args: [
            sizes,
            1
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-opacity",
        args: [
            opacities,
            1
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-speed",
        args: [
            speeds,
            1
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-color",
        args: [
            colors,
            3
        ]
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("bufferAttribute", {
        attach: "attributes-noise",
        args: [
            noises,
            3
        ]
    })), children ? children : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$QB$2e$Club$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("sparklesImplMaterial", {
        transparent: true,
        pixelRatio: dpr,
        depthWrite: false
    }));
});
;
}),
]);

//# sourceMappingURL=1014c_%40react-three_drei_596d3c29._.js.map