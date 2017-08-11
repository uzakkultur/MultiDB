Ext.define('MultiDB.controller.DBMainController', {
    extend: 'Ext.app.Controller',

    refs: {
        formPanel: 'dbformpanel#formPanel',
        gridPanel: 'dbgridpanel#gridPanel',
        mainView: 'dbmainview#mainView',
        registrationBtn: 'splitbutton#registrationBtn'
    },

    init: function (application) {
        this.control({
            "menuitem[opt]": {
                click: this.setFormPanel
            }
        });
    },

    setFormPanel: function (item) {
        var me = this,
            gridPanel = me.getGridPanel(),
            formPanel = me.getFormPanel(),
            mainView = me.getMainView(),
            registrationBtn = me.getRegistrationBtn(),
            previewText = 'Registration Card is ' + item.text;

        if (item.opt !== 'hide') {
            if (formPanel.isHidden()) {
                formPanel.show();
            }

            gridPanel.remove(formPanel, false);

            formPanel.region = item.opt;

            mainView.add(formPanel);
        } else {
            if (!formPanel.isHidden()) {
                formPanel.hide();
            }
        }

        registrationBtn.setText(previewText);
    }

});