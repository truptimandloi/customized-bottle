import { useCustomizer } from "../../context/CustomizerContext";

export default function LogoUploader() {
  const { setLogo } = useCustomizer();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <label className="block mb-2 font-semibold">Upload Logo</label>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
}