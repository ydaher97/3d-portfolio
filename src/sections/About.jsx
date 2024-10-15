import { useState ,useEffect, useRef, useMemo} from 'react';
import Globe from 'react-globe.gl';
import * as THREE from '//unpkg.com/three/build/three.module.js';
import Button from '../components/Button.jsx';
// import TechStackCarousel from '../components/TechStackCarsouel.jsx';
import TechObjectCanvas from '../components/TechObject.jsx';
// import { Canvas } from '@react-three/fiber';
// import Stars from './Stars.jsx';
import CodeTyper from '../components/CodeTyper.jsx';
import AnimatedEmailIcon from '../components/AnimatedEmailIcon.jsx';
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 80; // km
const TIME_STEP = 3 * 1000; // per frame

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const globeEl = useRef();
    const [satData, setSatData] = useState();
    const [globeRadius, setGlobeRadius] = useState();
    const [time, setTime] = useState(new Date());
  const handleCopy = () => {
    navigator.clipboard.writeText(' yazeeddaher@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    // time ticker
    (function frameTicker() {
      requestAnimationFrame(frameTicker);
      setTime(time => new Date(+time + TIME_STEP));
    })();
  }, []);

  useEffect(() => {
    // load satellite data
    fetch('//unpkg.com/globe.gl/example/datasets/space-track-leo.txt').then(r => r.text()).then(rawData => {
      const tleData = rawData.replace(/\r/g, '')
        .split(/\n(?=[^12])/)
        .filter(d => d)
        .map(tle => tle.split('\n'));
      const satData = tleData.map(([name, ...tle]) => ({
        satrec: satellite.twoline2satrec(...tle),
        name: name.trim().replace(/^0 /, '')
      }))
      // exclude those that can't be propagated
      .filter(d => !!satellite.propagate(d.satrec, new Date()).position)
      .slice(0, 1500);

      setSatData(satData);
    });
  }, []);

  const objectsData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = satellite.gstime(time);
    return satData.map(d => {
      const eci = satellite.propagate(d.satrec, time);
      if (eci.position) {
        const gdPos = satellite.eciToGeodetic(eci.position, gmst);
        const lat = satellite.radiansToDegrees(gdPos.latitude);
        const lng = satellite.radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
      }
      return d;
    });
  }, [satData, time]);

  const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    return new THREE.Mesh(satGeometry, satMaterial);
  }, [globeRadius]);

  useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    globeEl.current.pointOfView({ altitude: 3.5 });
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Yazeed Daher</p>
              <p className="grid-subtext">
                With a lot of projects and 1 year experience, I have honed my skills in both frontend and backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            {/* <TechStackCarousel /> */}
            <TechObjectCanvas />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
           
              <Globe
              ref={globeEl}
                height={400}
                width={400}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 31, lng: 34, text: 'Acre, israel', color: 'white', size: 15 }]}
                objectsData={objectsData}
                objectFacesSurface={false}
                objectThreeObject={satObject}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Acre, israel and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" /> */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Game Rules:</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Type the code snippet exactly as shown</li>
                <li>Pay attention to spaces and special characters</li>
                <li>Your score increases with each correct entry</li>
                <li>New snippet appears automatically upon correct completion</li>
                <li>Challenge yourself to type faster and more accurately</li>
              </ul>
            </div>
            <CodeTyper />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            {/* <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            /> */}
            <div className="w-full md:h-[126px] sm:h-[276px] h-fit flex items-center justify-center rounded-lg">
          <AnimatedEmailIcon />
        </div>

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yazeedddaher@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
