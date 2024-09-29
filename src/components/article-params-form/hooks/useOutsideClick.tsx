import { useEffect } from 'react';

type TUseOutsideClick = {
	menuRef: React.RefObject<HTMLElement>;
	isMenuOpen: boolean;
	onMenuClose: () => void;
};

export const useOutsideClick = ({
	menuRef,
	isMenuOpen,
	onMenuClose
}: TUseOutsideClick) => {
	useEffect(() => {
		if (!isMenuOpen) return;

		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !menuRef.current?.contains(target)) {
				onMenuClose();
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [isMenuOpen]);
};
