import { useRecoilValue } from 'recoil';
import { timeState } from '../../store/atoms';
import './tooltip.css'

function Tooltip () {
    const time = useRecoilValue(timeState);

    const tooltip = document.querySelectorAll('.tooltip');

    const trackMouseTooltip = (e) => {
        for (let i = tooltip.length; i--;) {
            tooltip[i].style.left = e.pageX + 'px';
            tooltip[i].style.top = (e.pageY - 40) + 'px';
        }
    }

    document.addEventListener('mousemove', trackMouseTooltip);

    return (
        <div className="tooltip">
            {time.toLocaleTimeString()}
        </div>
    )
}

export default Tooltip