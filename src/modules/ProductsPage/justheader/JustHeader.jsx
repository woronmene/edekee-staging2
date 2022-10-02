
import mainStyle from './JustHeader.module.scss'
// eslint-disable-next-line react/prop-types
export default function JustHeader ({header}) {
    return (
        <div className={`globalHeading globalContainer1 header7 ${mainStyle.JustHeader}`}>
            <p className={``}>{header}</p>
        </div>
    )
}