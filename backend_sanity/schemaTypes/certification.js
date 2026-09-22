import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'certification',
  title: 'Certifications',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Certification Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Credential Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
      media: 'image',
    },
  },
});