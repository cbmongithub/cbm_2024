import type { SVGProps } from "react"

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={300.047}
        height={171.5}
        preserveAspectRatio="none"
        viewBox="99.974 164.102 300.047 171.5"
        {...props}
    >
        <title>Cbm Logo</title>
        <text
            x={99.974}
            y={303.102}
            style={{
                fill: "#fff",
                fontFamily: "Arial,sans-serif",
                fontSize: "153.4px",
                whiteSpace: "pre",
            }}
        >
            {"\uD835\uDD54\uD835\uDD53\uD835\uDD5E"}
        </text>
    </svg>
)
export default Logo
