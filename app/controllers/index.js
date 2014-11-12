var view = Alloy.createController('debts/list').getView();

if (OS_ANDROID) {
	view.open();
} else {
	Alloy.Globals.nav.window = view;
	Alloy.Globals.nav.open();
}