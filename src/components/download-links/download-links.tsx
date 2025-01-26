import android from "../../icons/downloadAndroid.svg";
import ios from "../../icons/downloadIos.svg";

const DownloadLinks: React.FC = ({}) => {
  return (
    <div className="flex gap-x-[16px]">
      <div className="bg-gray-dark py-[9px] px-[30px] rounded-full cursor-pointer">
        <img src={ios}></img>
      </div>
      <div className="bg-gray-dark py-[9px] px-[30px] rounded-full cursor-pointer">
        <img src={android}></img>
      </div>
    </div>
  );
};

export default DownloadLinks;
