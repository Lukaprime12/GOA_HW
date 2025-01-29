let obj = {
    length: 100,
    width: 150,
    height: 200,
    cuboid: function () {
        return obj.length * obj.width * obj.height;
    },
}
console.log(obj.cuboid());