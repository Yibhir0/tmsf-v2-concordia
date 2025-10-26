import React, { useEffect } from "react";

export const FacilityImage = ({ onClose, preview }) => {
    useEffect(() => {
        if (!preview) return;
        const onKey = (e) => e.key === "Escape" && onClose?.();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [preview, onClose]);

    if (!preview) return null;

    let facilityImage = null;
    try {
        facilityImage = require(`../../assets/img/facilities/${preview.src}`);
    } catch (error) {
        console.error("Error loading image:", error);
    }

    const name = preview.name

    return (
        <div
            role="dialog"
            aria-modal="true"
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                display: "grid",
                placeItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: "relative",
                    background: "white",
                    borderRadius: 12,
                    padding: 12,
                    maxWidth: "92vw",
                    maxHeight: "92vh",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                }}
            >
                <h3 >{name}</h3>

                <img
                    src={facilityImage}
                    alt={name}
                    style={{ maxWidth: "88vw", maxHeight: "85vh", display: "block" }}
                />
            </div>
        </div>
    );
};
