import { css } from "@emotion/css";

function ShopBadge({color}) {
    return (
        <div className={container(color)}>
            19
        </div>
    );
}

const container = (color) => css`
    width: 25px;
    height: 25px;
    line-height: 25px;

    background: ${color};
    
    color: white;
    font-weight: 500;
    font-size: 12px;
    text-align: center;
`;

export default ShopBadge;