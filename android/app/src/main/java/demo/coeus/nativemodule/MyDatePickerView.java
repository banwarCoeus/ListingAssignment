package demo.coeus.nativemodule;

import android.content.Context;
import android.os.Build;
import android.widget.DatePicker;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class MyDatePickerView extends DatePicker {

    @RequiresApi(api = Build.VERSION_CODES.O)
    public MyDatePickerView(Context context) {
        super(context);

        super.setOnDateChangedListener(new OnDateChangedListener() {
            @Override
            public void onDateChanged(DatePicker datePicker, int i, int i1, int i2) {
                String date = datePicker.getDayOfMonth()+"/"+datePicker.getMonth()+"/"+datePicker.getYear();
                WritableMap event = Arguments.createMap();
                event.putString("selectedDate", date);
                ReactContext reactContext = (ReactContext)getContext();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        getId(),
                        "onDateChanged",
                        event);
            }
        });
    }


}
