package demo.coeus.nativemodule;

import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.DatePicker;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class ReactDatePickerManager extends SimpleViewManager<MyDatePickerView> {
    public static final String REACT_CLASS = "RNTDatePicker";
    ReactApplicationContext mCallerContext;

    public ReactDatePickerManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @NonNull
    @Override
    protected MyDatePickerView createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new MyDatePickerView(this.mCallerContext);
    }

    @ReactProp(name = "showCalendar")
    public void setShowCalendar(DatePicker view, boolean check) {
        Log.d("Native Call", check+"");
        view.isEnabled();
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.of(
                "onDateChanged",
                MapBuilder.of("registrationName","onChange")
        );
    }
}
