import { Watermark } from '@arco-design/web-react';
import Style from './index.module.less';
import bizi from '@/assets/33.mp4';
import { useLayoutEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

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
      <Watermark content="阿伟的官网" className={Style['home']}>
        <video
          className={Style['home-video']}
          loop
          ref={ref}
          src={bizi}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Watermark>
      <div className={Style['home-time']}>{currentTime}</div>
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
