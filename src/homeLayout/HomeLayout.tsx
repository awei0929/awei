import Style from './index.module.less';
import { useLayoutEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import Three from './Three';

function HomeLayout() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(
    dayjs().format('YYYY-MM-DD HH:mm:ss')
  );

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.muted = true;
      ref.current.autoplay = true;
      ref.current.play();
    }
  }, []);

  setInterval(() => {
    setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  return (
    <>
      <div className={Style['home-time']}>{currentTime}</div>
      <div className={Style['home']}>
        <Three />
      </div>
      <div className={Style['home-link']}>
        <div
          className={Style['home-link-item']}
          onClick={() => navigate('/layout')}
        >
          管理后台
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
