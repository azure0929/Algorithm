/**
* 서비스에 가입하는 유저들의 아이디를 생성하는 업무 담당
* 아이디를 추천해주는 프로그램을 개발
* 아이디의 길이: 3자 이상 15자 이하
*/

function solution(new_id) {
    function toLower(id) {
        return id.toLowerCase();
    }
    function removeInvalidChars(id) {
        return id.replace(/[^\w-_.]/g, '')
    }
    function replaceDots(id) {
        return id.replace(/\.+/g, '.');
    }
    function trimDots(id) {
        return id.replace(/^\.|\.$/g, '');
    }
    function handleEmpty(id) {
        return id || 'a';
    }
    function limitLength(id) {
        return id.slice(0, 15).replace(/\.$/, '');
    }
    function padShort(id) {
        const len = id.length;
        return len > 2 ? id : id + id.charAt(len - 1).repeat(3 - len);
    }
    
    return padShort(
        limitLength (
            handleEmpty (
                trimDots (
                    replaceDots(
                        removeInvalidChars(toLower(new_id))
                    )
                )
            )
        )
    );
}