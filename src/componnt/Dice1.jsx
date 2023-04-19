import UtilAxios from "../Util/axios";

async function Dice1 (props){
    let roundom = Math.ceil(Math.random() * 6)
    localStorage.setItem('roundomDice1', roundom);
    let Steps1 = await UtilAxios.Get("http://localhost:3010/Geme/GetPlayerSteps1")
    let temp = Steps1.GetIt + roundom - 100;
    let x = roundom + Steps1.GetIt > 100 ? (100 - temp) :
        roundom + Steps1.GetIt < 100 ? (roundom + Steps1.GetIt) :
            roundom + Steps1.GetIt === 100 ? viner() : null;

    x = x === 4 ? 14 :
        x === 8 ? 37 :
            x === 22 ? 32 :
                x === 43 ? 63 :
                    x === 45 ? 55 :
                        x === 60 ? 79 :
                            x === 62 ? 82 :
                                x === 78 ? 88 :
                                    x === 23 ? 13 :
                                        x === 30 ? 19 :
                                            x === 51 ? 41 :
                                                x === 68 ? 47 :
                                                    x === 83 ? 47 :
                                                        x;
    function viner(params) {
        alert("תמר החמודה ניצחת")
        return roundom + Steps1.GetIt
    }
    return x
}
export default Dice1;