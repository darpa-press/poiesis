import React from "react";
import { useSelector } from "react-redux";

const SidebarStats = () => {
    const stats = useSelector((state) => state.analysis.stats);
    if (!stats) return false;
    return (
        <>
            <p>
                <span style={{ textTransform: "capitalize" }}>
                    {stats.meter_type_scheme}
                </span>{" "}
                {stats.beat_scheme_repr}
                <br />
                {stats.beat_scheme_type && `(${stats.beat_scheme_type})`}
            </p>
            {stats.rhyme_scheme_accuracy > 0 && (
                <p>
                    {stats.rhyme_scheme_name}{" "}
                    {stats.rhyme_scheme_form &&
                        `(${stats.rhyme_scheme_form.toUpperCase()})`}
                </p>
            )}
        </>
    );
};
export default SidebarStats;
