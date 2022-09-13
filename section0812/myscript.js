/* myscript.js */

function hap(a,b) { // 두 수 사이의 합을 반환하시오
    // tmp 사용하기
    if(a>b){
        let tmp=a; a=b; b=tmp;
    }

    let sum=0;
    for(let n=a; n<=b; n++) {
        sum+=n;
    }

    return sum;

} // hap() end

function diff(a,b) { // 두 수 사이의 차이를 반환하시오
    return Math.abs(a-b);
} // diff() end

function leap(year) { // 윤년, 평년을 반환하시오
    if(year%4==0 && year%100!=0 || year%400==0){
        return true;
    } else {
        return false;
    }
} // leap() end, true는 윤년, false는 평년