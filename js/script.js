const closeBtn = document.querySelector('.close');
const menuBtn = document.querySelector('.menu-btn');
const menuShadow = document.querySelector('.menu-shadow');
const mainTitle = document.querySelector('.mainTitle');
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

document.addEventListener('scroll', () => {
	if (window.scrollY < window.innerHeight) {
		mainTitle.innerHTML = 'Model S';
	} else if (window.scrollY >= 3 * window.innerHeight) {
		mainTitle.innerHTML = 'Model 3';
	} else if (window.scrollY >= 2 * window.innerHeight) {
		mainTitle.innerHTML = 'Model Y';

	} else if (window.scrollY >= window.innerHeight) {
		mainTitle.innerHTML = 'Model X';
	}
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

// nums = [0, 5, 1, 4, 4, 4, 2, 2, 2, 1];
// const map1 = new Map();

// nums.forEach(e => {
// 	if (e % 2 === 0) {
// 		if (map1.get(e) === undefined) {
// 			map1.set(e, 1);
// 		} else {
// 			let num = map1.get(e);
// 			num++;
// 			map1.set(e, num);
// 		}
// 	}
// });
// const maxOfMap = Math.max(...map1.values());
// console.log(maxOfMap);
// console.log([...map1.values()].sorted);
// console.log([...map1.values()].indexOf(maxOfMap));

// console.log(map1);

//  //2637. Promise Time Limit

// fn = async (a, b) => {
// 	await new Promise(res => setTimeout(res, 120));
// 	return a + b;
// };

// // inputs = [5, 10];
// // t = 150;

// var timeLimit = function (fn, t) {
// 	setTimeout(new Promise((resolve, reject) => {
// 		if (fn()) {
// 			resolve(fn());
// 		} else {
// 			reject('Time Limit Exceeded');
// 		}
// 		prom.then(()=>{
// 		console.log(message)
// 		})
// 	}), t)

// };
// // fn(5, 10);
// timeLimit(fn(5, 10), 50);

//  //657. Robot Return to Origin

// moves = 'UD';

// let axisY = 0;
// let axisX = 0;

// [...moves].forEach(e => {
// 	if (e === 'U') axisY++;
// 	else if (e === 'D') axisY--;
// 	else if (e === 'R') axisX++;
// 	else if (e === 'L') axisX--;
// });

// let qwert = axisY === 0 && axisX === 0 ? true : false;
// console.log(qwert);
// console.log(axisX);
// console.log(axisY);

// // 1592. rearrange spaces

// const nums1 = [1, 1, 3, 2],
// 	nums2 = [2, 3],
// 	nums3 = [3];

// for (let i of nums1) {
// 	let mapped = nums2.map(x => nums1[i] === x);
// 	console.log(mapped);
// }
