// FacilityList.jsx
import { useState } from "react";
import FacilityItem from "./FacilityItem";
import { FacilityImage } from "./FacilityImage";

export default function FacilityList({ facilities }) {
    const [preview, setPreview] = useState(null);

    const handleClick = (facility) => () => {
        setPreview({ src: facility.img, name: facility.name });
    };

    return (
        <>
            <div className="row textCenter flexCenter">
                {facilities?.map((facility, index) => (
                    <div
                        className={`col-xs-12 col-sm-4 col-md-4 col-lg-4 ${index === 3 ? "center-item" : ""
                            }`}
                        key={facility.id ?? index}
                    >
                        <FacilityItem
                            img={facility.img}
                            name={facility.name}
                            description={facility.description}
                            action={handleClick(facility)}
                        />
                    </div>
                ))}
            </div>
            <FacilityImage
                onClose={() => setPreview(null)}
                preview={preview}
            />
        </>

    );
}
