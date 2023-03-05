import React from 'react'
import { wechat_qr } from '../../../assets'

export default function WechatQR({ popupOpen }) {
    return (
        <div>
            <img
                className={`popup ${popupOpen ? `open` : `closed`}`}
                src={wechat_qr}
                alt="Wechat QR Code">
            </img>
        </div>
    )
}
