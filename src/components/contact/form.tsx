"use client"

import {MainInput, MotionEl} from "@/components";
import {Button} from "@nextui-org/react";
import {FastField, Form, Formik, isFunction} from "formik";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {useTranslations} from "next-intl";
import * as Yup from "yup";

export const ContactForm = ({onClose}: { onClose?: () => void }) => {
  const t = useTranslations('contact')

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required(t("fullName_required"))
      .min(3, t("fullName_minLength"))
      .max(64, t("fullName_maxLength")),
    email: Yup.string()
      .required(t("email_required"))
      .email(t("email_invalid")),
    phone: Yup.string()
      .required(t("phone_required"))
      .test('isValidPhoneNumber', t("phone_invalid"), value => {
        const phoneNumber = parsePhoneNumberFromString(value || '');
        return phoneNumber ? phoneNumber.isValid() : false;
      }),
    purpose: Yup.string(),
  });

  return (
    <Formik
      initialValues={{fullName: '', email: '', purpose: ''}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting}) => {
        console.log('Form data', values);
        setSubmitting(false);
      }}
    >
      {({isSubmitting}) => {
        return (
          <Form className="flex h-full text-black flex-col gap-4 py-4">
            <FastField
              type="text"
              name="fullName"
              label={t("fullName")}
              component={MainInput}
            />
            <FastField
              name="email"
              label={t("email")}
              component={MainInput}
            />
            <FastField
              name="phone"
              label={t("phone")}
              type="phone"
              component={MainInput}
            />
            <FastField
              type="description"
              name="purpose"
              placeholder={t("leaveYourIdea")}
              label={t("purpose")}
              component={MainInput}
            />
            {isFunction(onClose) ? (
              <MotionEl delay={.2} className="flex items-center gap-3 justify-end">
                <Button
                  size="lg"
                  type="button"
                  color="primary"
                  onClick={onClose}
                  aria-label="cancel form"
                  className="text-white text-xl mt-auto font-light"
                >
                  {t("cancel")}
                </Button>
                <Button
                  size="lg"
                  type="submit"
                  color="success"
                  aria-label="submit form"
                  isLoading={isSubmitting}
                  className="text-white text-xl mt-auto font-light"
                >
                  {t("submit")}
                </Button>
              </MotionEl>
            ) : (
              <Button
                size="lg"
                type="submit"
                color="primary"
                isLoading={isSubmitting}
                className="text-white text-2xl py-7 mt-auto font-light"
              >
                Submit
              </Button>
            )}
          </Form>
        )
      }}
    </Formik>
  )
}