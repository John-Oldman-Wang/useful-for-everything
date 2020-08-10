const vhtml = require("vhtml");
const htm = require("htm");

export const html = htm.bind(function(...args) {
    console.log(args)
    return vhtml(...args)
});
// export default
