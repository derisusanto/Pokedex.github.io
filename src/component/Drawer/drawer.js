import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Gambar from '../../assets/img/logo.png';
import { FormatAlignJustify } from '@material-ui/icons';

function Drawer(props) {
	const useStyles = makeStyles(theme => ({
		list: {
			width: 250
		},
		fullList: {
			width: 'auto'
		},
		toolbar: {
			width: 250,
			height: 70,
			textAlign: 'center'
		}
	}));

	const classes = useStyles();
	const [state, setState] = React.useState({});

	const list = anchor => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom'
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<div className={classes.toolbar}>
				<img
					src={Gambar}
					alt="logo-halogistik"
					width="150px"
					className="img-logo img-fluid mt-4"
				/>
			</div>
			<Divider />

			<List>
				{[
					{
						name: 'Layanan Kami',
						icon: <InboxIcon />
					},
					{
						name: 'Tautan Cepat',
						icon: <MailIcon />
					},
					{
						name: 'Kemitraan',
						icon: <InboxIcon />
					},
					{
						name: 'Tentang Kami',
						icon: <InboxIcon />
					},
					{
						name: 'Mulai Kirim',
						icon: <InboxIcon />
					}
				].map((text, index) => (
					<ListItem button key={index}>
						<ListItemIcon>{text.icon}</ListItemIcon>
						<ListItemText primary={text.name} />
					</ListItem>
				))}
			</List>
			<Divider />
		</div>
	);

	const toggleDrawer = (anchor, open) => event => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	return (
		<div>
			{['left'].map(anchor => (
				<React.Fragment key={anchor}>
					<Button onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</Button>
					<SwipeableDrawer
						anchor={'left'}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</React.Fragment>
			))}
		</div>
	);
}
export default Drawer;
