import * as LivePhotosKit from 'livephotoskit';
import img from '@/assets/img.jpg';
import vodeo from '@/assets/vodeo.mov';
import { useEffect, useRef } from 'react';

function HomeLayout() {
  const ref = useRef<HTMLDivElement | null>(null);
  const init = () => {
    const player = LivePhotosKit.Player(ref.current as HTMLDivElement);
    player.photoSrc = img;
    player.videoSrc = vodeo;
    player.addEventListener('canplay', evt => console.log('player ready', evt));
    player.addEventListener('error', evt =>
      console.log('player load error', evt)
    );
    player.addEventListener('ended', evt =>
      console.log('player finished playing through', evt)
    );
    // Use the playback controls.
    player.playbackStyle = LivePhotosKit.PlaybackStyle.default;
    player.playbackStyle = LivePhotosKit.PlaybackStyle.FULL;
    player.play();
    player.pause();
    player.toggle();
    player.stop();
    // Seek the animation to one quarter through.
    player.currentTime = 0.25 * player.duration;
    // Seek the animation to 0.1 seconds into the Live Photo.
    player.currentTime = 0.1;
  };

  useEffect(() => {
    if (ref.current) {
      init();
    }
  }, [ref.current]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div ref={ref} style={{ width: '400px', height: '400px' }}></div>
    </div>
  );
}

export default HomeLayout;
