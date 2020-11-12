import React from "react";
import stressSoft from "Components/LineMain/stressSoft.svg";
import stressStrong from "Components/LineMain/stressStrong.svg";
import stressBreak from "Components/LineMain/stressBreak.svg";

import SidebarStats from "./SidebarStats";

const Text = () => (
    <>
        <div style={{ flex: 1 }}>
            <p>
                Poiesis is a word processor (in development) that might help in
                writing poetry. It counts syllables and guesses at their stress.
            </p>
            <dl>
                <dt>
                    <img alt="" src={stressStrong} />
                </dt>
                <dd>Stressed syllable</dd>
            </dl>
            <dl>
                <dt>
                    <img alt="" src={stressSoft} />
                </dt>
                <dd>Unstressed syllable</dd>
            </dl>
            <dl>
                <dt>
                    <img alt="" src={stressBreak} />
                </dt>
                <dd>Not-sure syllable</dd>
            </dl>
            <p>Hover over the stress icons to see the syllable number.</p>
            <p>Show or hide the analysis with Ctrl-A.</p>
            <p>
                File->Conjure a poem (Ctrl-N) will load a poem from the Poetry
                Foundation's database.
            </p>
            <p>
                Your writing is saved locally, so if you refresh the page or
                revisit later, you can start where you left off. But you might
                like to periodically save your work to txt (File->Save TXT file
                (Cmd-S)). Your writing is not stored on the server.
            </p>
            <SidebarStats />
            <p>
                <a
                    href="//eepurl.com/gp16a1"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Subscribe to updates ->
                </a>
            </p>
        </div>

        <p>
            V0.2 (28 October 2020)
            <br />
            Published by{" "}
            <a href="//darpa.press/" rel="noopener noreferrer" target="_blank">
                Darpa
            </a>{" "}
            press 2019
        </p>
    </>
);

export default Text;
