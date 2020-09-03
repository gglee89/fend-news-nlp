const initialLoad = () => {
    const drp = $('#weather_drp');

    drp.daterangepicker({
        autoUpdateInput: false,
        minDate: moment(),
        locale: {
            cancelLabel: 'Clear'
        }
    }, function (start, end, label) {
        drp.val(`From ${start.format('M/D/Y')} to ${end.format('M/D/Y')}`);
        $('#weather_submit').attr('disabled', false);
    });
}

export { initialLoad };

