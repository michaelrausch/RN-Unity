using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MessageTest : MonoBehaviour
{
    private bool canRotate = true;

    void Awake()
    {
        UnityMessageManager.Instance.OnRNMessage += onMessage;
    }

    void onDestroy()
    {
        UnityMessageManager.Instance.OnRNMessage -= onMessage;
    }

    void onMessage(MessageHandler message)
    {
        var data = message.getData<string>();

        Debug.Log("onMessage:" + data);

        canRotate = !canRotate;
        UnityMessageManager.Instance.SendMessageToRN("Now it is " + (canRotate ? "": "not ") + "rotating");
        
        message.send(new { CallbackTest = "I am Unity callback" });
    }

    void OnMouseDown()
    {
        Debug.Log("click");
        UnityMessageManager.Instance.SendMessageToRN(new UnityMessage()
        {
            name = "click",
            callBack = (data) =>
            {
                Debug.Log("onClickCallBack:" + data);
            }
        });
    }

    // Update is called once per frame
    void Update()
    {
        if (!canRotate)
        {
            return;
        }
        var delta = 30 * Time.deltaTime;
        transform.localRotation *= Quaternion.Euler(delta, delta, delta);
    }
}
