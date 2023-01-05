import style from '../../styles/Home.module.css'

export default function Footer(){
    return ( <>
        <div className={style.footer}>
             Weekdays between 05:00-01:30 am. <br /> On Saturdays, the trains start operations an hour later, and run from 06:00-01:30 am. <br /> On Sundays and public holidays, trains operate from 7:00 am – 12:30 am.
        </div>
    </>
    )
}