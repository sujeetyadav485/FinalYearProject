import { BeakerIcon } from "@heroicons/react/solid";

function Boxes()
{
    return(
        <div className="grid sm:grid-cols-3 grid-1 content-start align-middle">
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SR 2022 Sec-A Btech 1st SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SR 2022 Sec-B Btech 2nd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SR 2022 Sec-C Btech 2nd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SR 2022 Sec-A Btech 3rd SEM
            </div>
            <div className="box">
                <BeakerIcon className="subIcon"/>
                SR 2022 Sec-B Btech 3rd SEM
            </div>
        </div>
    );
}

export default Boxes;