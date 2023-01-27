interface HeaderProps {
	catCount: number;
	dogCount: number;
}

const Header: React.FC<HeaderProps> = ({catCount, dogCount}) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {catCount} Cats in this Cat App
		</h2>
		<h2 className='header__title'>
			There are currently {dogCount} Dogs infiltrating this Cat App!
		</h2>
	</header>
);

export default Header;
