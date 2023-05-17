const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu-btn');
const menuShadow = document.querySelector('.menu-shadow');

//navigation

closeMenu = function () {
	const e = document.querySelector('aside');
	e.classList.add('hide-menu');
	menuShadow.classList.remove('active');
};

closeBtn.addEventListener('click', function () {
	closeMenu();
});
menuShadow.addEventListener('click', function () {
	closeMenu();
});

menuBtn.addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('aside').classList.remove('hide-menu');
	menuShadow.classList.add('active');
});

// const sections =
// 	//scroll
// 	console.log([...document.querySelectorAll('section')]);

// sectionArray = [...document.querySelectorAll('section')];
// document.addEventListener(
// 	'scroll',
// 	function () {
// 		valOpacity = Math.abs(window.scrollY / (sectionArray[0].clientHeight / 2) - 1);
// 		document.querySelector('section').style.opacity = valOpacity;
// 		window.scroll()
// 	}

// 	// [0]clientHeight
// );

nums = [0, 5, 1, 4, 4, 4, 2, 2, 2, 1];
const map1 = new Map();

nums.forEach(e => {
	if (e % 2 === 0) {
		if (map1.get(e) === undefined) {
			map1.set(e, 1);
		} else {
			let num = map1.get(e);
			num++;
			map1.set(e, num);
		}
	}
});
const maxOfMap = Math.max(...map1.values());
console.log(maxOfMap);
console.log([...map1.values()].sorted);
console.log([...map1.values()].indexOf(maxOfMap));

console.log(map1);
