
import ImageZoom from '../components/ImageZoom';

export default function Zoom() {
  return (
    <div>
      <h1>Image Zoom Example</h1>
      <ImageZoom src="/key_skills.gif" alt="Zoomable Image" width={300} height={200} />
    </div>
  );
}
