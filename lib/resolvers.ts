import { QueryResolvers, MutationResolvers } from "./type-defs.graphqls";
import { ResolverContext } from "./apollo";
import { Row } from "./multipleRows.graphql";
import { db } from "../firebase-config";

const Duplicitycheck = (allRows: [Row], singleRow: Row) => {
  if (allRows.find((x) => x.code === singleRow.code)) return false;
  else return true;
};

const Query: Required<QueryResolvers<ResolverContext>> = {
  multipleRows: async (_parent, _args, _context, _info) => {
    var rows: Array<Row> = [];
    db.ref("" + _args.storage).on("value", function (snapshot: any) {
      rows = snapshot.val();
    });
    return rows;
  },
  singleRow: async (_parent, _args, _context, _info) => {
    var row: Row = {};
    db.ref("rows/" + _args.id).on("value", function (snapshot: any) {
      row = snapshot.val();
    });
    return row;
  },
};

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  AddSingleRow: async (_parent, _args, _context, _info) => {
    db.ref("rows/" + _args.id).set({
      code: _args.code,
      count: _args.count,
      description: _args.description,
      id: _args.id,
      name: _args.name,
    });
    return _args;
  },
  deleteSingleRow: async (_parent, _args, _context, _info) => {
    db.ref("rows/" + _args.id).remove();
    return _args;
  },
  editCount: async (_parent, _args, _context, _info) => {
    db.ref("rows/" + _args.id).update({ count: _args.count });
    return _args;
  },
};

export default { Query, Mutation };
