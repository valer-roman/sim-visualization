var arrowH = 5;

function getAlphaCadran(x1, y1, x2, y2) {
	if (x1 < x2) {
		if (y1 >  y2) {
			return 1;
		} else {
			return 4;
		}
	} else {
		if (y1 >  y2) {
			return 2;
		} else {
			return 3;
		}
	}
}

function getArrowBaseLeftPointX(x, y, x1, y1) {
	if (x == x1) {
		return x;
	}
	var a = Math.abs(x1 - x);
	var b = Math.abs(y1 - y);
	var angle= (Math.PI * 30) / 180;
	var alpha = Math.atan(b / a);
	var x3 = 0;
	
	var alphaCadran = getAlphaCadran(x, y, x1, y1);
	
	var xLen1; 
	if (alphaCadran == 1) {
		xLen1 = Math.abs(arrowH * Math.cos(alpha - angle));
		x3 = x + xLen1;
	} else if (alphaCadran == 2) {
		if ((Math.PI/2 - alpha) < angle) {
			xLen1 = Math.abs(arrowH * Math.cos(Math.PI - alpha - angle));
			x3 = x + xLen1;
		} else {
			xLen1 = Math.abs(arrowH * Math.cos(alpha + angle));
			x3 = x - xLen1;
		}
	} else if (alphaCadran == 3) {
		xLen1 = Math.abs(arrowH * Math.cos(alpha - angle));
		x3 = x - xLen1;		
	} else if (alphaCadran == 4) {
		if ((Math.PI/2 - alpha) < angle) {
			xLen1 = Math.abs(arrowH * Math.cos(Math.PI - alpha - angle));
			x3 = x - xLen1;
		} else {
			xLen1 = Math.abs(arrowH * Math.cos(alpha + angle));
			x3 = x + xLen1;
		}
	}

	return x3;
}

function getArrowBaseLeftPointY(x, y, x1, y1) {
	if (x == x1) {
		return y;
	}

	var a = Math.abs(x1 - x);
	var b = Math.abs(y1 - y);
	var angle= (Math.PI * 30) / 180;
	var tanAlpha = b / a;
	var alpha = Math.atan(tanAlpha);
	var y3 = 0;
	
	var alphaCadran = getAlphaCadran(x, y, x1, y1);
	
	var yLen1;
	
	if (alphaCadran == 1) {
		if (alpha < angle) {
			yLen1 = Math.abs(arrowH * Math.sin(angle - alpha));
			y3 = y + yLen1;
		} else {
			yLen1 = Math.abs(arrowH * Math.sin(alpha - angle));
			y3 = y - yLen1;
		}
	} else if (alphaCadran == 2) {
		yLen1 = Math.abs(arrowH * Math.sin(Math.PI - alpha - angle));
		y3 = y - yLen1;
	} else if (alphaCadran == 3) {
		if (alpha < angle) {
			yLen1 = Math.abs(arrowH * Math.sin(angle - alpha));
			y3 = y - yLen1;
		} else {
			yLen1 = Math.abs(arrowH * Math.sin(alpha - angle));
			y3 = y + yLen1;
		}		
	} else if (alphaCadran == 4) {
		yLen1 = Math.abs(arrowH * Math.sin(Math.PI - alpha - angle));
		y3 = y + yLen1;
	}
	
	return y3;
}

function getArrowBaseRightPointX(x, y, x1, y1) {
	if (x == x1) {
		return x;
	}

	var a = Math.abs(x1 - x);
	var b = Math.abs(y1 - y);
	var angle= (Math.PI * 30) / 180;
	var alpha = Math.atan(b / a);
	var x4 = 0;
	
	var alphaCadran = getAlphaCadran(x, y, x1, y1);
	
	var xLen1; 
	if (alphaCadran == 1) {
		if ((Math.PI/2 - alpha) < angle) {
			xLen1 = Math.abs(arrowH * Math.cos(Math.PI - alpha - angle));
			x4 = x - xLen1;
		} else {
			xLen1 = Math.abs(arrowH * Math.cos(alpha + angle));
			x4 = x + xLen1;
		}
	} else if (alphaCadran == 2) {
		xLen1 = Math.abs(arrowH * Math.cos(alpha - angle));
		x4 = x - xLen1;
	} else if (alphaCadran == 3) {
		if ((Math.PI/2 - alpha) < angle) {
			xLen1 = Math.abs(arrowH * Math.cos(Math.PI - alpha - angle));
			x4 = x + xLen1;			
		} else {
			xLen1 = Math.abs(arrowH * Math.cos(alpha + angle));
			x4 = x - xLen1;
		}
	} else if (alphaCadran == 4) {
		xLen1 = Math.abs(arrowH * Math.cos(alpha - angle));
		x4 = x + xLen1;
	}

	return x4;
}

function getArrowBaseRightPointY(x, y, x1, y1) {
	if (x == x1) {
		return y;
	}

	var a = Math.abs(x1 - x);
	var b = Math.abs(y1 - y);
	var angle= (Math.PI * 30) / 180;
	var tanAlpha = b / a;
	var alpha = Math.atan(tanAlpha);
	var y4 = 0;
	
	var alphaCadran = getAlphaCadran(x, y, x1, y1);
	
	var yLen1;
	
	if (alphaCadran == 1) {
		yLen1 = Math.abs(arrowH * Math.sin(alpha + angle));
		y4 = y - yLen1;			
	} else if (alphaCadran == 2) {
		if (alpha < angle) {
			yLen1 = Math.abs(arrowH * Math.sin(angle - alpha));
			y4 = y + yLen1;
		} else {
			yLen1 = Math.abs(arrowH * Math.sin(alpha - angle));
			y4 = y - yLen1;			
		}
	} else if (alphaCadran == 3) {
		yLen1 = Math.abs(arrowH * Math.sin(alpha + angle));
		y4 = y + yLen1;			
	} else if (alphaCadran == 4) {
		if (alpha < angle) {
			yLen1 = Math.abs(arrowH * Math.sin(angle - alpha));
			y4 = y - yLen1;
		} else {
			yLen1 = Math.abs(arrowH * Math.sin(alpha - angle));
			y4 = y + yLen1;			
		}
	}
	
	return y4;
}
