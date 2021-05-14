import { QueryResolvers, MutationResolvers } from "./type-defs.graphqls";
import { ResolverContext } from "./apollo";
import { db } from "../firebase-config";

const Query: Required<QueryResolvers<ResolverContext>> = {
  multipleRows: async (_parent, args, _context, _info) => {
    return await (await db.ref(args.storage).get()).val();
  },
  singleRow: async (_parent, args, _context, _info) => {
    return await (await db.ref(args.storage).get()).val();
  },
};

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  AddSingleRow: async (_parent, args, _context, _info) => {
    await db.ref(args.storage + "/" + args.id).set({
      code: args.code,
      count: args.count,
      description: args.description,
      id: args.id,
      name: args.name,
    });
    return args;
  },
  deleteSingleRow: async (_parent, args, _context, _info) => {
    await db.ref(args.storage + "/" + args.id).remove();
    return args;
  },
  editCount: async (_parent, args, _context, _info) => {
    await db.ref(args.storage + "/" + args.id).update({ count: args.count });
    return args;
  },
};

export default { Query, Mutation };
