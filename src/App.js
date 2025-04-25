import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Heading from './components/Typography/Heading';
function App() {
    return (_jsxs("div", { children: [_jsx(Heading, { level: 1, className: "text-red-300", children: "H1 Heading" }), _jsx(Heading, { level: 3, className: "text-red-500", children: "H3 Tailwind Heading" })] }));
}
export default App;
